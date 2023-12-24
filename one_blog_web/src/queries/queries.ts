import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost, createUserAccount, signInAccount, signOutAccount } from '../appwrite/api'
import { type Post, type NewUser } from '../utils/types'
import { QUERY_KEYS } from './queriesKeys'

/** CREATE USER ACCOUNT */
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: async (user: NewUser) =>
      await createUserAccount(user)
  })
}

/** SIGN IN ACCOUNT */
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: async (user: { email: string, password: string }) =>
      await signInAccount(user)
  })
}

/** SIGN OUT */
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount
  })
}

/** CREATE POST */
export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (post: Post) => await createPost(post),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS]
      })
    }
  })
}
