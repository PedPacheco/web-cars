import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import Router from 'next/router'
import nookies from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { AuthService } from '~/services/auth.service'
import { ToastService } from '~/services/toast.service'
import { firebase } from '../lib/firebase'

interface User {
  id: string
  name: string
  avatar: string | null
  cep?: string
  email: string
  phone: string | null
}

interface AuthContextData {
  user: User | undefined
  loading: boolean
  signInWithProvider: (
    provider: GoogleAuthProvider | FacebookAuthProvider,
  ) => Promise<void>
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>
  registerWithEmailAndPassword: (
    name: string,
    email: string,
    password: string,
    cep: string,
    phone: string,
    urlImage: string,
  ) => Promise<void>
  signout: () => Promise<void>
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const auth = getAuth()

    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(undefined)
        nookies.set(undefined, 'token', '', {
          maxAge: 30 * 24 * 60 * 60,
        })
      } else {
        if (!user.email || !user.displayName) {
          return console.error('missing information from account')
        }
        const token = await user.getIdToken()

        const response = await AuthService.getUserById(user.uid)

        setUser({
          id: user.uid,
          email: user.email,
          name: user.displayName,
          phone: response.data.phone,
          avatar: user.photoURL,
          cep: response.data.cep,
        })

        nookies.set(undefined, 'token', token, {
          maxAge: 30 * 24 * 60 * 60,
        })
      }
    })
  }, [])

  async function signInWithProvider(
    provider: GoogleAuthProvider | FacebookAuthProvider,
  ) {
    try {
      setLoading(true)
      const auth = getAuth()
      const result = await signInWithPopup(auth, provider)

      if (!result.user) {
        throw new Error('Usuário não existe')
      }

      const { email, displayName, phoneNumber, photoURL, uid } = result.user

      const token = await result.user.getIdToken()
      const users = await AuthService.getAll()

      for (const user of users.data) {
        if (user.id === uid) {
          return
        }
      }

      await AuthService.register({
        name: displayName,
        email,
        password: null,
        cep: null,
        phone: phoneNumber,
        id: uid,
      })

      if (!displayName || !email) {
        throw new Error('Informações do Usuário faltando')
      }

      setUser({
        id: uid,
        email,
        name: displayName,
        phone: phoneNumber,
        avatar: photoURL,
      })

      nookies.set(undefined, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
      })
      ToastService.success('Login realizado com sucesso')
    } catch (error) {
      ToastService.error('Não foi possível fazer seu login')
      setLoading(false)
    }
  }

  async function loginWithEmailAndPassword(
    emailUser: string,
    passoword: string,
  ) {
    try {
      setLoading(true)
      const auth = getAuth()
      const result = await signInWithEmailAndPassword(
        auth,
        emailUser,
        passoword,
      )

      if (!result.user) {
        throw new Error('Usuário não existe')
      }

      const { email, displayName, photoURL, uid } = result.user
      const token = await result.user.getIdToken()

      const user = await AuthService.getUserById(uid)

      if (!displayName || !email) {
        throw new Error('Informações do Usuário faltando')
      }

      setUser({
        id: uid,
        email,
        name: displayName,
        phone: user.data.phone,
        avatar: photoURL,
        cep: user.data.cep,
      })

      nookies.set(undefined, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
      })

      ToastService.success('Login realizado com sucesso')
    } catch (error) {
      ToastService.error('Não foi possível fazer seu login')
      setLoading(false)
    }
  }

  async function registerWithEmailAndPassword(
    name: string,
    emailUser: string,
    password: string,
    cep: string,
    phone: string,
    urlImage: string,
  ) {
    try {
      setLoading(true)
      const auth = getAuth()

      if (!emailUser || !password) {
        throw new Error('Informações do Usuário faltando')
      }

      const result = await createUserWithEmailAndPassword(
        auth,
        emailUser,
        password,
      )

      updateProfile(result.user, {
        displayName: name,
        photoURL: urlImage,
      })

      if (!result.user) {
        throw new Error('Não foi possível fazer o cadastro')
      }

      const { email, uid } = result.user
      const token = await result.user.getIdToken()

      await AuthService.register({
        name,
        email,
        password,
        phone,
        cep,
        id: uid,
      })

      if (!email || !name) {
        throw new Error('Informações do Usuário faltando')
      }

      setUser({
        id: uid,
        email,
        name,
        phone,
        cep,
        avatar: urlImage,
      })

      nookies.set(undefined, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
      })

      ToastService.success('Cadastro realizado com sucesso')
      setLoading(false)
      Router.push('/')
    } catch (error) {
      ToastService.error('Algo deu errado ao fazer seu cadastro')
      setLoading(false)
    }
  }

  async function signout() {
    try {
      setLoading(true)

      await firebase
        .auth()
        .signOut()
        .then(() => {
          setUser(undefined)
        })
      setUser(undefined)
      nookies.set(undefined, 'token', '', {
        maxAge: 30 * 24 * 60 * 60,
      })
      localStorage.removeItem('vehicleData')
      localStorage.removeItem('photos')

      ToastService.success('Você foi deslogado com sucesso')
      setTimeout(() => {
        setLoading(false)
        Router.push('/')
      }, 1000)
    } catch (error) {
      ToastService.error('Algo deu errado ao tenta se deslogar')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithProvider,
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
export default AuthContext
