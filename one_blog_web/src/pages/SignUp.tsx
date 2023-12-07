import { useState } from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import { TbBrandGoogleFilled, TbBrandApple } from 'react-icons/tb'
import PageTransitionAnimationWrapper from '../common/PageTransitionAnimationWrapper'
import toast from 'react-hot-toast'

const SignUp = () => {
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSignup = (e) => {
    e.preventDefault()

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // regex for email
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ // regex for password

    // obtener el formulario
    const form = new FormData(e.target)
    const formData = {}

    // obtener los datos del formulario
    for (const [key, value] of form.entries()) {
      formData[key] = value
    }

    const { name, email, password } = formData

    // validacion de los datos
    if (name.length < 3) {
      toast.error('El nombre debe tener al menos más de 3 letras.')
    }
    if (!email || !emailRegex.test(email)) {
      toast.error('El correo electrónico es invalido.')
    }
    if (!passwordRegex.test(password)) {
      toast.error('La contraseña debe contener 6 u 8 caracteres, un carácter numérico, una letra minúscula y una mayúscula.')
    }
    e.target.reset()
  }

  return (
    <PageTransitionAnimationWrapper keyValue='signup'>
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
                <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">o</span>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSignup}>
                <Input
                  label='Nombre'
                  name='name'
                  type='text'
                  placeholder='Jhon Doe' />
                <Input
                  label='Correo'
                  name='email'
                  type='email'
                  placeholder='jhon.doe@gmail.com' />
                <Input
                  label='Contraseña'
                  name='password'
                  type='password'
                  placeholder='••••••••' />
                <div
                  className="flex items-start">
                  <div
                    className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-neutral-300 rounded bg-neutral-50 focus:ring-3 focus:ring-rose-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-rose-600 dark:ring-offset-neutral-800"
                      required=""
                      onClick={() => setAcceptTerms(prev => !prev)} />
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
                <button
                  type="submit"
                  className={`w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 cursor-pointer ${acceptTerms ? '' : 'cursor-not-allowed bg-red-300'}`}
                  disabled={!acceptTerms}>
                  Crear cuenta
                </button>
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
      </section>
    </PageTransitionAnimationWrapper>

  )
}

export default SignUp
