import * as z from 'zod'

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  username: z.string().min(2, { message: 'El usuario debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string()
})
