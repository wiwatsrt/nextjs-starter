import { createContext, useContext, useEffect, useState } from 'react'

import firebase from '../lib/firebase'
import { AuthUser, AuthContextProvider, AuthProviderProps } from '../types'
import { removeAuthCookie, setAuthCookie } from '../utils/auth/userCookies'

const AuthContext = createContext<AuthContextProvider>({
  auth: null,
  loading: true,
  signOut: async () => undefined,
  signInWithEmailAndPassword: async () => undefined,
})

const formatAuthState = (user: firebase.User): AuthUser => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  token: null,
})

function useProvideAuth() {
  const [auth, setAuth] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  /**
   * Callback function used for firebase.auth.onIdTokenChanged().
   * Takes the user object returned and formats it for my state.
   * We fetch the idToken and append it to my auth state and store it.
   */
  const handleTokenChange = async (user: firebase.User | null) => {
    if (!user) {
      clear()
      return
    }

    // Formats response into my required state.
    const authData = formatAuthState(user)
    // Fetch firebase auth ID Token.
    authData.token = await user.getIdToken()
    // Stores auth into state.
    setAuth(authData)
    // Sets loading state to false.
    setLoading(false)
    // Sets auth cookie
    setAuthCookie(authData)
  }

  /**
   * Callback function used for response from firebase OAuth.
   * Store user object returned in firestore.
   * @param firebase User Credential
   */
  const signedIn = async (response: firebase.auth.UserCredential) => {
    if (!response.user) {
      throw new Error('No User')
    }
  }

  /**
   * Callback for when firebase signOut.
   * Sets auth state to null and loading to true.
   */
  const clear = () => {
    setAuth(null)
    removeAuthCookie()
    setLoading(true)
  }

  /**
   * Signs in using an email and password. and calls signIn when successful.
   * sets loading to true.
   */
  const signInWithEmailAndPassword = (email: string, password: string) => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(signedIn)
  }

  /**
   * Calls firebase signOut and with clear callback to reset state.
   */
  const signOut = () => {
    return firebase.auth().signOut().then(clear)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleTokenChange)
    return () => unsubscribe()
  }, [])

  // returns state values and callbacks for signIn and signOut.
  return {
    auth,
    loading,
    signInWithEmailAndPassword,
    signOut,
  }
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
