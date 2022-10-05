import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import Router from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../lib/firebase'

interface User {
  id: string
  name: string 
  avatar: string 
  userEmail: string | null
  phone: string | null
}

interface AuthContextData {
  user: User | undefined;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(true)

  async function signInWithGoogle() {
    try {
      setLoading(true)
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result =  await signInWithPopup(auth, provider)
      
      if(result.user) {
        const {email, displayName, phoneNumber, photoURL, uid} = result.user
      
        if(!displayName || !photoURL) {
          throw new Error("missing information from Google account")
        }

        setUser({
          id: uid,
          userEmail: email,
          name: displayName,
          phone: phoneNumber,
          avatar: photoURL 
        })
  
      }

    } finally {
      setLoading(false)
    }
  }

  async function signout() {
    try {
      Router.push('/')

      await firebase
        .auth()
        .signOut()
        .then(() => {
          setUser(undefined)
        })
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
