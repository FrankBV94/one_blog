import { useState } from 'react'
import Logo from '../imgs/logo_white.png'
import { Link, Outlet } from 'react-router-dom'
import { TbSearch, TbMenu2, TbEdit, TbMoonStars, TbSun } from 'react-icons/tb'
import useTheme from '../hooks/useTheme'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [showSearchInput, setShowSearchInput] = useState(true)
  const { darkMode, setDarkMode } = useTheme()

  const toggleMenu = () => {
    setShowMenu(prev => !prev)
  }

  const toggleSearchInput = () => {
    setShowSearchInput(prev => !prev)
  }

  return (
    <>
      <nav className="bg-white border-b-2 border-neutral-200 dark:bg-neutral-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="h-10"
              alt="Flowbite Logo"
            />
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <TbSearch className='w-5 h-5 text-neutral-500 dark:text-neutral-400' />
                <span className="sr-only">Buscar icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10  text-neutral-900 border border-neutral-300 rounded-full bg-neutral-50 focus:ring-rose-500 focus:border-rose-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Buscar..." />
            </div>
          </Link>
          <div className="flex md:hidden md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg  p-2.5 me-1" onClick={() => toggleSearchInput()}>
              <TbSearch className='w-5 h-5' />
              <span className="sr-only">Buscar</span>
            </button>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center  text-neutral-500 rounded-full md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-search" aria-expanded="false" onClick={() => toggleMenu()}>
              <span className="sr-only">Open main menu</span>
              <TbMenu2 className='w-5 h-5' />
            </button>
          </div>
          <div className={showMenu || showSearchInput ? 'items-center justify-between w-full md:flex md:w-auto md:order-1' : 'hidden'} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <TbSearch className='w-4 h-4 text-neutral-500 dark:text-neutral-400' />
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10  text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-rose-500 focus:border-rose-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Buscar..." />
            </div>
            <ul className={showMenu ? 'flex flex-col p-4 md:p-0 mt-4 font-medium border items-center border-neutral-100 rounded-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700 gap-4' : 'hidden'}>
              <li>
                <Link to="#" className="block py-2 px-3 text-neutral-900 rounded md:bg-transparent md:p-0 dark:text-white">
                  Escribir
                </Link>
              </li>
              <li>
                <Link to="/signin" className="block py-2 px-3 text-neutral-900 rounded md:bg-transparent md:p-0 dark:text-white">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link to="/signup" className="block py-2 px-3 text-neutral-900 rounded-full md:text-white md:bg-neutral-900 dark:text-white">
                  Crear cuenta
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
