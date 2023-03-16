import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import InputPage from '../pages/InputPage'
import LoginPage from '../pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'category-page',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/input-page',
    element: <InputPage />
  },
  {
    path: '/register-page',
    element: <InputPage />
  },
  {
    path: '/input-page/category',
    element: <InputPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router