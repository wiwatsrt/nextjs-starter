export type AuthUser = {
  uid: string
  email: string | null
  name: string | null
  photoUrl: string | null
  token: string | null
}

export type AuthContextProvider = {
  auth: AuthUser | null
  loading: boolean
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export type AuthProviderProps = {
  children: React.ReactNode
}
