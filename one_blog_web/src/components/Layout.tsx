import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout
