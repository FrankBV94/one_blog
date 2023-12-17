export interface Inputs {
  name: string
  email: string
  password: string
  username: string
}

export interface IUpdateUser {
  userId: string
  name: string
  bio: string
  imageId: string
  imageUrl: URL | string
  file: File[]
}

export interface INewPost {
  userId: string
  caption: string
  file: File[]
  location?: string
  tags?: string
}

export interface IUpdatePost {
  postId: string
  caption: string
  imageId: string
  imageUrl: URL
  file: File[]
  location?: string
  tags?: string
}

export interface User {
  id: string
  name: string
  username: string
  email: string
  image_url: string
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
