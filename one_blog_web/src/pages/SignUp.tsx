import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnimationWrapper from '../common/AnimationWrapper'
import { TbBrandGoogleFilled, TbBrandApple, TbEye, TbEyeOff } from 'react-icons/tb'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type Inputs } from '../utils/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupValidation } from '../utils/validations'
import type * as z from 'zod'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useCreateUserAccount, useSignInAccount } from '../queries/queries'
import { useUserContext } from '../context/AuthContext'
import Loader from '../common/Loader'

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(SignupValidation) })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [acceptTermsAndConditions, setAcceptTermsAndConditions] = useState(false)
  const navigate = useNavigate()
  const { mutateAsync: createUserAccount, isPending: isCreatingUser } = useCreateUserAccount()
  const { mutateAsync: signInAccount, isPending: isSigningUser } = useSignInAccount()
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext()

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  const onSubmit: SubmitHandler<Inputs> = async (user: z.infer<typeof SignupValidation>) => {
    try {
      const newUser = await createUserAccount(user)

      if ('message' in newUser) {
        return toast.error('Ya existe un usuario con el mismo correo electrónico.')
      }

      if (newUser.lenght === 0) {
        return toast.error('Registro fallido. Inténtalo de nuevo.')
      }

      const session = await signInAccount({ email: user.email, password: user.password })
      if (session?.$id === null) {
        return toast.error('Algo salió mal. Por favor inicie sesión en su nueva cuenta.')
      }

      const isLoggedIn = await checkAuthUser()

      if (isLoggedIn) {
        reset()
        navigate('/home')
      } else {
        return toast.error('Fallo al iniciar sesion. Inténtalo de nuevo.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AnimationWrapper keyValue='signup'>
      <section
        className="bg-neutral-50 dark:bg-neutral-900">
        <div
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-neutral-800 dark:border-neutral-700">
            <div
              className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                className="text-xl font-gelasio font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white">
                Únete ahora a One Blog.
              </h1>
              <div className='flex flex-col justify-around md:flex-row'>
                <button type="button" className="border text-neutral-900 bg-white hover:bg-neutral-100 focus:ring-4 focus:outline-none focus:ring-neutral-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                  <TbBrandGoogleFilled className='w-4 h-4 me-2' />
                  Inicia sesión con Google
                </button>
                <button type="button" className="border text-neutral-900 bg-white hover:bg-neutral-100 focus:ring-4 focus:outline-none focus:ring-neutral-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                  <TbBrandApple className='w-4 h-4 me-2' />
                  Inicia sesión con Apple
                </button>
              </div>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-96 h-px bg-neutral-200 border-0 dark:bg-neutral-700" />
                <span className="absolute px-3 font-medium text-neutral-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-neutral-900">o</span>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                {/* FIELD NAME */}
                <div>
                  <label
                    htmlFor='name'
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Nombre
                  </label>
                  <div>
                    <input
                      type='text'
                      id='name'
                      placeholder='Jhon Doe'
                      {...register('name')}
                      className={`border  sm:text-sm rounded-lg block w-full p-2.5 
                      ${(errors.name != null)
                          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-neutral-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
                          : 'bg-neutral-50  border-neutral-300 text-neutral-900 dark:bg-neutral-700 focus:ring-rose-600 focus:border-rose-600 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500'}`} />
                  </div>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.name?.message}
                  </p>
                </div>
                {/* FIELD USERNAME */}
                <div>
                  <label
                    htmlFor='username'
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Usuario
                  </label>
                  <div>
                    <input
                      type='text'
                      id='username'
                      placeholder='jhondoe'
                      {...register('username')}
                      className={`border  sm:text-sm rounded-lg block w-full p-2.5 
                      ${(errors.username != null)
                          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-neutral-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
                          : 'bg-neutral-50  border-neutral-300 text-neutral-900 dark:bg-neutral-700 focus:ring-rose-600 focus:border-rose-600 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500'}`} />
                  </div>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.username?.message}
                  </p>
                </div>
                {/* FIELD EMAIL */}
                <div>
                  <label
                    htmlFor='email'
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Correo
                  </label>
                  <div>
                    <input
                      type='email'
                      id='email'
                      placeholder='jhon.doe@gmail.com'
                      {...register('email')}
                      className={`border  sm:text-sm rounded-lg block w-full p-2.5 
                      ${(errors.email != null)
                          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-neutral-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
                          : 'bg-neutral-50  border-neutral-300 text-neutral-900 dark:bg-neutral-700 focus:ring-rose-600 focus:border-rose-600 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500'}`} />
                  </div>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.email?.message}
                  </p>
                </div>
                {/* FIELD PASSWORD */}
                <div>
                  <label
                    htmlFor='password'
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Contraseña
                  </label>
                  <div className='relative'>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      id='password'
                      placeholder='••••••••'
                      {...register('password')}
                      className={`border  sm:text-sm rounded-lg block w-full p-2.5 
                      ${(errors.password != null)
                          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-neutral-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
                          : 'bg-neutral-50  border-neutral-300 text-neutral-900 dark:bg-neutral-700 focus:ring-rose-600 focus:border-rose-600 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500'}`} />
                    {passwordVisible
                      ? (<TbEye className='absolute end-2.5 bottom-2.5 text-neutral-900 h-6 w-6 cursor-pointer' onClick={() => { togglePasswordVisibility() }} />)
                      : (<TbEyeOff className='absolute end-2.5 bottom-2.5 text-neutral-900 h-6 w-6 cursor-pointer' onClick={() => { togglePasswordVisibility() }} />)
                    }
                  </div>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.password?.message}
                  </p>
                </div>
                <div
                  className="flex items-start">
                  <div
                    className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      onClick={() => setAcceptTermsAndConditions(prev => !prev)}
                      className="w-4 h-4 border border-neutral-300 rounded bg-neutral-50 focus:ring-3 focus:ring-rose-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-rose-600 dark:ring-offset-neutral-800 cursor-pointer"

                    />
                  </div>
                  <div
                    className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-neutral-500 dark:text-neutral-300">
                      Accepto los&nbsp;
                      <a
                        className="font-medium text-rose-600 hover:underline dark:text-rose-500" href="#">
                        Términos y condiciones
                      </a>
                    </label>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  {isCreatingUser || isSigningUser || isUserLoading
                    ? <Loader />
                    : <motion.button
                      type="submit"
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer ${acceptTermsAndConditions ? 'bg-rose-600  hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300  dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800' : 'cursor-none bg-rose-300'}`}
                      disabled={!acceptTermsAndConditions}>
                      Crear cuenta
                    </motion.button>
                  }
                </div>
                <p
                  className="text-sm font-light text-neutral-500 dark:text-neutral-400">
                  Ya tienes una cuenta?&nbsp;
                  <Link
                    to="/signin"
                    className="font-medium text-rose-600 hover:underline dark:text-rose-500">
                    Entre aquí
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section >
    </AnimationWrapper >
  )
}

export default SignUp
