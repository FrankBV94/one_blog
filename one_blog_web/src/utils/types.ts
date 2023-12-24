export interface Inputs {
  name: string
  email: string
  password: string
  username: string
}

export interface Post {
  title: string
  banner: File[]
  des: string
  content: []
  tags?: string
  draft?: boolean
  author: string
}

export interface User {
  id: string
  name: string
  username: string
  email: string
  avatarUrl: string
  bio: string
}

export interface NewUser {
  name: string
  username: string
  email: string
  password: string
}

export interface AuthContextType {
  user: User
  isLoading: boolean
  isAuthenticated: boolean
  setUser: React.Dispatch<React.SetStateAction<User>>
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  checkAuthUser: () => Promise<boolean>
}
