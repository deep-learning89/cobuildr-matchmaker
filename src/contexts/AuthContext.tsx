import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { 
  type User, 
  type Session, 
  signUp as supabaseSignUp, 
  signIn as supabaseSignIn, 
  signOut as supabaseSignOut,
  getUser,
  getStoredSession 
} from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const initAuth = async () => {
      const storedSession = getStoredSession()
      if (storedSession) {
        const { user, session } = await getUser()
        setUser(user)
        setSession(session)
      }
      setLoading(false)
    }
    
    initAuth()
  }, [])

  const signUp = async (email: string, password: string) => {
    const { user, session, error } = await supabaseSignUp(email, password)
    if (!error && user) {
      setUser(user)
      setSession(session)
    }
    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { user, session, error } = await supabaseSignIn(email, password)
    if (!error && user) {
      setUser(user)
      setSession(session)
    }
    return { error }
  }

  const signOut = async () => {
    await supabaseSignOut()
    setUser(null)
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
