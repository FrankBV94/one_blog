import Black_Logo from '../assets/imgs/logo_white.png'
import White_Logo from '../assets/imgs/logo_dark.png'
import { Link, useNavigate } from 'react-router-dom'
import { TbSearch, TbBellFilled, TbBallpenFilled, TbUserFilled, TbSettingsFilled, TbLogout2, TbMoonStars, TbSun, TbAppsFilled } from 'react-icons/tb'
import { useThemeStore } from '../store/theme'
import { useClick, useFloating, useInteractions, useDismiss, shift } from '@floating-ui/react'
import { useEffect, useState } from 'react'
import AnimationWrapper from '../common/AnimationWrapper'
import { useUserContext } from '../context/AuthContext'
import { useSignOutAccount } from '../queries/queries'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUserContext()
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  /** Theme Controller */
  const { theme, toggleTheme } = useThemeStore()
  /** User Menu Controller */
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const {
    refs: MenuRefs,
    floatingStyles: MenuFloatingStyles,
    context: MenuContext
  } = useFloating({
    middleware: [shift()],
    open: isOpenMenu,
    onOpenChange: setIsOpenMenu
  })
  const menuClick = useClick(MenuContext)
  const menuDismiss = useDismiss(MenuContext)
  const {
    getReferenceProps: MenuGetReferenceProps,
    getFloatingProps: MenuGetFloatingProps
  } = useInteractions([
    menuClick,
    menuDismiss
  ])
  /** Notifications Menu Controller */
  const [isOpenNotifications, setIsOpenNotifications] = useState(false)
  const {
    refs: NotificationsRefs,
    floatingStyles: NotificationsFloatingStyles,
    context: NotificationsContext
  } = useFloating({
    middleware: [shift()],
    open: isOpenNotifications,
    onOpenChange: setIsOpenNotifications
  })
  const notificationsClick = useClick(NotificationsContext)
  const notificationsDismiss = useDismiss(NotificationsContext)
  const {
    getReferenceProps: NotificationsGetReferenceProps,
    getFloatingProps: NotificationsGetFloatingProps
  } = useInteractions([
    notificationsClick,
    notificationsDismiss
  ])

  /** User Menu Controller */
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const {
    refs: SearchRefs,
    floatingStyles: SearchFloatingStyles,
    context: SearchContext
  } = useFloating({
    open: isOpenSearch,
    onOpenChange: setIsOpenSearch
  })
  const searchClick = useClick(SearchContext)
  const searchDismiss = useDismiss(SearchContext)
  const {
    getReferenceProps: SearchGetReferenceProps,
    getFloatingProps: SearchGetFloatingProps
  } = useInteractions([
    searchClick,
    searchDismiss
  ])

  useEffect(() => {
    if (isSuccess) navigate(0)
  }, [isSuccess])

  return (
    <header className="antialiased">
      <nav className="bg-white border-neutral-200 px-4 lg:px-6 py-2.5 dark:bg-neutral-800">
        <div className="flex flex-wrap justify-around items-center">
          <div className="flex justify-start items-center">
            <Link to="home" className="flex mr-4">
              <img src={theme === 'dark' ? White_Logo : Black_Logo} className="mr-3 h-8" alt="One Blog Logo" />
            </Link>
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Buscar</label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <TbSearch className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-9 p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Buscar" />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <Link to="/editor" className="hidden sm:inline-flex items-center justify-center text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">
              <TbBallpenFilled className="mr-1 -ml-1 w-5 h-5" />
              Escribir
            </Link>
            {/* Search Button */}
            <button
              id="toggleMobileSearch"
              type="button"
              className="p-2 text-neutral-500 rounded-lg lg:hidden hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
              ref={SearchRefs.setReference} {...SearchGetReferenceProps()}>
              <span className="sr-only">Buscar</span>
              {/* Search Icon */}
              <TbSearch className="w-4 h-4" />
            </button>
            {/* Search Dropdown */}
            {isOpenSearch && (
              <AnimationWrapper transition={{ duration: 0.2 }}>
                <div
                  ref={SearchRefs.setFloating}
                  style={SearchFloatingStyles}
                  {...SearchGetFloatingProps()}
                >
                  <div className="overflow-hidden z-50 my-4 max-w-xs text-base list-none bg-white rounded divide-y divide-neutral-100 shadow-lg dark:divide-neutral-600 dark:bg-neutral-700" id="search-dropdown">
                    <form action="#" method="GET" className="lg:block lg:pl-2">
                      <label htmlFor="topbar-search" className="sr-only">Buscar</label>
                      <div className="relative mt-1 lg:w-96">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <TbSearch className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="topbar-search"
                          className="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-9 p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Buscar" />
                      </div>
                    </form>
                  </div>
                </div>
              </AnimationWrapper>
            )}
            {/* Notifications Button */}
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-neutral-500 rounded-lg hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-700 focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-600"
              ref={NotificationsRefs.setReference} {...NotificationsGetReferenceProps()}>
              <span className="sr-only">Ver notificaciones</span>
              {/* Notifications Icon */}
              <TbBellFilled className="w-5 h-5" />
            </button>
            {/* Notifications Dropdown */}
            {isOpenNotifications && (
              <AnimationWrapper transition={{ duration: 0.2 }}>
                <div
                  ref={NotificationsRefs.setFloating}
                  style={NotificationsFloatingStyles}
                  {...NotificationsGetFloatingProps()}
                >
                  <div className="overflow-hidden z-50 my-4 max-w-xs text-base list-none bg-white rounded divide-y divide-neutral-100 shadow-lg dark:divide-neutral-600 dark:bg-neutral-700" id="notification-dropdown">
                    <div className="block py-2 px-4 text-base font-medium text-center text-neutral-700 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
                      Notificaciones
                    </div>
                    <div>
                      <Link to="#" className="flex py-3 px-4 border-b hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:border-neutral-600">
                        <div className="flex-shrink-0">
                          <img className="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                          <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-neutral-900 rounded-full border border-white dark:border-neutral-700">
                            <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" /></svg>
                          </div>
                        </div>
                        <div className="pl-3 w-full">
                          <div className="text-neutral-500 font-normal text-sm mb-1.5 dark:text-neutral-400"><span className="font-semibold text-neutral-900 dark:text-white">Jese leos</span> and <span className="font-medium text-neutral-900 dark:text-white">5 others</span> started following you.</div>
                          <div className="text-xs font-medium text-sky-700 dark:text-sky-400">10 minutes ago</div>
                        </div>
                      </Link>
                    </div>
                    <a href="#" className="block py-2 text-base font-medium text-center text-neutral-900 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-700 dark:text-white dark:hover:underline">
                      <div className="inline-flex items-center ">
                        <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                        View all
                      </div>
                    </a>
                  </div>
                </div>
              </AnimationWrapper>
            )}
            {/* User Menu Button */}
            <button
              type="button"
              className="flex mx-3 text-sm bg-neutral-800 rounded-full md:mr-0 focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
              ref={MenuRefs.setReference} {...MenuGetReferenceProps()}>
              <span className="sr-only">Abrir menú de usuario</span>
              {user.avatarUrl
                ? (<img className="w-8 h-8 rounded-full" src={user.avatarUrl || '/assets/icons/profile-placeholder.svg'} alt="user photo" />)
                : (<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {user.name
                      .split(/\s/)
                      .reduce(
                        (response, word) => (response += word.slice(0, 1)),
                        ''
                      )}
                  </span>
                </div>)
              }

            </button>
            {/* User Menu Dropdown */}
            {isOpenMenu && (
              <AnimationWrapper transition={{ duration: 0.2 }}>
                <div
                  ref={MenuRefs.setFloating}
                  style={MenuFloatingStyles}
                  {...MenuGetFloatingProps()}
                >
                  <div
                    className="z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-neutral-100 shadow dark:bg-neutral-700 dark:divide-neutral-600"
                    id="dropdown">
                    <ul
                      className="py-1 text-neutral-500 dark:text-neutral-400"
                      aria-labelledby="dropdown">
                      <li className='md:hidden'>
                        <Link
                          to="/editor"
                          className="flex items-center py-2 px-4 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                          <TbBallpenFilled className="mr-2 w-4 h-4 text-neutral-400" />
                          Escribir
                        </Link>
                      </li>
                      <li>
                        <button
                          className="flex w-full items-center py-2 px-4 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white"
                          onClick={toggleTheme}>
                          {
                            theme === 'dark'
                              ? <TbMoonStars className="mr-2 w-4 h-4 text-neutral-400" />
                              : <TbSun className="mr-2 w-4 h-4 text-neutral-400" />
                          }
                          Cambiar tema
                        </button>
                      </li>
                    </ul>
                    <ul
                      className="py-1 text-neutral-500 dark:text-neutral-400"
                      aria-labelledby="dropdown">
                      <li>
                        <Link
                          to={`/profile/${user.id}`}
                          className="flex items-center py-2 px-4 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                          <TbUserFilled className="mr-2 w-4 h-4 text-neutral-400" />
                          Perfil
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/profile'
                          className="flex items-center py-2 px-4 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                          <TbAppsFilled className="mr-2 w-4 h-4 text-neutral-400" />
                          Panel de control
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/settings"
                          className="flex items-center py-2 px-4 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                          <TbSettingsFilled className="mr-2 w-4 h-4 text-neutral-400" />
                          Ajustes
                        </Link>
                      </li>
                    </ul>
                    <ul
                      className="py-1 text-neutral-500 dark:text-neutral-400"
                      aria-labelledby="dropdown">
                      <li>
                        <button
                          className="flex items-center w-full py-2 px-4 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white"
                          onClick={() => signOut()}>
                          <TbLogout2 className="mr-2 w-4 h-4 text-neutral-400" />
                          Salir
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimationWrapper>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
