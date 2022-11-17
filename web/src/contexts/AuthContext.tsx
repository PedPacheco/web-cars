import axios from 'axios'
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

        const response = await axios
          .get(`http://localhost:3333/users/${user.uid}`)
          .then((response) => {
            return response.data
          })

        setUser({
          id: user.uid,
          email: user.email,
          name: user.displayName,
          phone: response?.phone,
          avatar: user.photoURL,
          cep: response?.cep,
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

      if (result.user) {
        const { email, displayName, phoneNumber, photoURL, uid } = result.user
        const token = await result.user.getIdToken()

        const users = await axios.get('http://localhost:3333/users')

        for (const user of users.data) {
          if (user.id === uid) {
            return
          }
        }

        await axios.post('http://localhost:3333/users', {
          name: displayName,
          email,
          password: null,
          cep: null,
          phone: phoneNumber,
          id: uid,
        })

        if (!displayName || !email) {
          throw new Error('missing information from Google account')
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
      }

      if (!result.user) {
        setUser(undefined)
        nookies.set(undefined, 'token', '', {
          maxAge: 30 * 24 * 60 * 60,
        })
      }
    } finally {
      Router.back()
      setLoading(false)
    }
  }

  async function loginWithEmailAndPassword(email: string, passoword: string) {
    try {
      setLoading(true)
      const auth = getAuth()
      const result = await signInWithEmailAndPassword(auth, email, passoword)

      if (result.user) {
        const { email, displayName, photoURL, uid } = result.user
        const token = await result.user.getIdToken()

        const user = await axios
          .get(`http://localhost:3333/users/${uid}`)
          .then((response) => {
            return response.data
          })

        if (!displayName || !email) {
          throw new Error('missing information from account')
        }

        setUser({
          id: uid,
          email,
          name: displayName,
          phone: user?.phone,
          avatar: photoURL,
          cep: user?.cep,
        })

        nookies.set(undefined, 'token', token, {
          maxAge: 30 * 24 * 60 * 60,
        })
      }

      if (!result.user) {
        setUser(undefined)
        nookies.set(undefined, 'token', '', {
          maxAge: 30 * 24 * 60 * 60,
        })
      }
    } finally {
      Router.back()
      setLoading(false)
    }
  }

  async function registerWithEmailAndPassword(
    name: string,
    email: string,
    password: string,
    cep: string,
    phone: string,
    urlImage: string,
  ) {
    try {
      setLoading(true)
      const auth = getAuth()

      if (!email || !password) {
        return console.error('missing information from account')
      }

      const result = await createUserWithEmailAndPassword(auth, email, password)

      updateProfile(result.user, {
        displayName: name,
        photoURL: urlImage,
      })

      if (result.user) {
        const { email, uid } = result.user
        const token = await result.user.getIdToken()

        await axios.post('http://localhost:3333/users', {
          name,
          email,
          password,
          phone,
          cep,
          id: uid,
        })

        if (!email || !name) {
          return console.error('missing information from account')
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
      }

      if (!result.user) {
        setUser(undefined)
        nookies.set(undefined, 'token', '', {
          maxAge: 30 * 24 * 60 * 60,
        })
      }
    } finally {
      Router.push('/')
      setLoading(false)
    }
  }

  async function signout() {
    try {
      setLoading(true)
      Router.push('/')

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
    } finally {
      setLoading(false)
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
