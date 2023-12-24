import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { QueryProvider } from './queries/queryProvider'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryProvider >
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 5000
      }} />
  </BrowserRouter>
)
