import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Welcome from './pages/Welcome'
import Layout from './components/Layout'
import Home from './pages/Home'
import Editor from './pages/Editor'

const App = () => {
  return (
    <Routes>
      <Route index path='/' element={<Welcome />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/editor' element={<Editor />} />
      </Route>
    </Routes>
  )
}

export default App
