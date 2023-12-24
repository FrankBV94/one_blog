import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import AnimationWrapper from '../common/AnimationWrapper'
import { useThemeStore } from '../store/theme'

const Layout: React.FC = () => {
  const theme = useThemeStore(state => state.theme)

  return (
    <div className={`h-screen ${theme === 'dark' ? 'bg-neutral-900 dark' : 'bg-white'}`}>
      <NavBar />
      <AnimationWrapper keyValue='outlet'>
        <Outlet />
      </AnimationWrapper>
    </div >
  )
}

export default Layout
