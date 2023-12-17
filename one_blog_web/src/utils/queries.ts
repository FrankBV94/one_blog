import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import { createUserAccount, signInAccount } from '../appwrite/api'
import { type NewUser } from './types'

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: async (user: NewUser) =>
      await createUserAccount(user)
  })
}

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: async (user: { email: string, password: string }) =>
      await signInAccount(user)
  })
}
