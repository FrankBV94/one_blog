import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route >
    </Routes>
  )
}

export default App
