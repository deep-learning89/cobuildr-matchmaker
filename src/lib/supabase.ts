// Supabase REST API client (no npm package required)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

const AUTH_STORAGE_KEY = 'supabase_auth_session'

export interface User {
  id: string
  email: string
  created_at: string
}

export interface Session {
  access_token: string
  refresh_token: string
  expires_at: number
  user: User
}

interface AuthResponse {
  user: User | null
  session: Session | null
  error: Error | null
}

// Get stored session from localStorage
export function getStoredSession(): Session | null {
  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    if (!stored) return null
    const session = JSON.parse(stored) as Session
    // Check if session is expired
    if (session.expires_at && Date.now() / 1000 > session.expires_at) {
      localStorage.removeItem(AUTH_STORAGE_KEY)
      return null
    }
    return session
  } catch {
    return null
  }
}

// Store session in localStorage
function storeSession(session: Session | null) {
  if (session) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }
}

// Sign up with email and password
export async function signUp(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
      },
      body: JSON.stringify({ email, password }),
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      return { user: null, session: null, error: new Error(data.error_description || data.msg || 'Sign up failed') }
    }
    
    const session: Session | null = data.access_token ? {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: data.expires_at,
      user: data.user,
    } : null
    
    if (session) {
      storeSession(session)
    }
    
    return { user: data.user, session, error: null }
  } catch (err) {
    return { user: null, session: null, error: err as Error }
  }
}

// Sign in with email and password
export async function signIn(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
      },
      body: JSON.stringify({ email, password }),
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      return { user: null, session: null, error: new Error(data.error_description || data.msg || 'Sign in failed') }
    }
    
    const session: Session = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: data.expires_at,
      user: data.user,
    }
    
    storeSession(session)
    
    return { user: data.user, session, error: null }
  } catch (err) {
    return { user: null, session: null, error: err as Error }
  }
}

// Sign out
export async function signOut(): Promise<void> {
  const session = getStoredSession()
  if (session) {
    try {
      await fetch(`${supabaseUrl}/auth/v1/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${session.access_token}`,
        },
      })
    } catch {
      // Ignore errors on sign out
    }
  }
  storeSession(null)
}

// Get current user from stored session
export async function getUser(): Promise<AuthResponse> {
  const session = getStoredSession()
  if (!session) {
    return { user: null, session: null, error: null }
  }
  
  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
      method: 'GET',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${session.access_token}`,
      },
    })
    
    if (!response.ok) {
      storeSession(null)
      return { user: null, session: null, error: null }
    }
    
    const user = await response.json()
    return { user, session, error: null }
  } catch {
    return { user: null, session, error: null }
  }
}
