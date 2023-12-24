import * as z from 'zod'

/** SIGN UP VALIDATION */
export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  username: z.string().min(2, { message: 'El usuario debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
})

/** SIGN IN VALIDATION */
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string()
})

/** CREATE POST VALIDATION */
export const PostValidation = z.object({
  tittle: z.string().min(5, { message: 'Minimum 5 characters.' }).max(100, { message: 'Maximum 100 caracters' }),
  banner: z.custom<File[]>(),
  des: z.string().min(5, { message: 'Minimum 5 characters.' }).max(2200, { message: 'Maximum 200 caracters' }),
  content: z.custom<[]>(),
  tags: z.string(),
  draf: z.boolean(),
  author: z.string()
})
