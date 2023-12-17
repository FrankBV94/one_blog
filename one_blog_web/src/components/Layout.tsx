import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import PageTransitionAnimationWrapper from '../common/AnimationWrapper'
import { useThemeStore } from '../store/theme'

const Layout: React.FC = () => {
  const theme = useThemeStore(state => state.theme)

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <NavBar />
      <PageTransitionAnimationWrapper keyValue='outlet'>
        <Outlet />
      </PageTransitionAnimationWrapper>
    </div >
  )
}

export default Layout
