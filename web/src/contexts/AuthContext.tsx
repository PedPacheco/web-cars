import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import Router from 'next/router'
import { setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { firebase } from '../lib/firebase'

interface User {
  id: string
  name: string | null
  avatar: any
  userEmail: string | null
  phone: string | null
}

interface AuthContextData {
  user: User | undefined
  loading: boolean
  signInWithProvider: (
    provider: GoogleAuthProvider | FacebookAuthProvider,
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
        setCookie(undefined, 'token', '', {
          maxAge: 30 * 24 * 60 * 60,
        })
      } else {
        const token = await user.getIdToken()
        setUser({
          id: user.uid,
          userEmail: user.email,
          name: user.displayName,
          phone: user.phoneNumber,
          avatar: user.photoURL,
        })
        setCookie(undefined, 'token', token, {
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

        if (!displayName || !photoURL) {
          throw new Error('missing information from Google account')
        }

        setUser({
          id: uid,
          userEmail: email,
          name: displayName,
          phone: phoneNumber,
          avatar: photoURL,
        })

        setCookie(undefined, 'token', token, {
          maxAge: 30 * 24 * 60 * 60,
        })
      }

      if (!result.user) {
        setUser(undefined)
        setCookie(undefined, 'token', '', {
          maxAge: 30 * 24 * 60 * 60,
        })
      }
    } finally {
      // Router.back()
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
      setCookie(undefined, 'token', '', {
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
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
export default AuthContext
