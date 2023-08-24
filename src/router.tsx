import {
    createBrowserRouter
} from 'react-router-dom'
import App from "./App.tsx"
import Tentang from './pages/tentang.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/tentang',
    element: <Tentang />
  }
])

export default router;