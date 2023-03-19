import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import InputPage from '../pages/InputPage'
import LoginPage from '../pages/LoginPage'

const checkLogin = async () => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    throw redirect("/login");
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: checkLogin,
    children: [
      {
        path: '',
        element: <HomePage />,
        loader: checkLogin,
      },
      {
        path: 'category-page',
        element: <HomePage />,
        loader: checkLogin,
      }
    ]
  },
  {
    path: '/input-page',
    element: <InputPage />,
    loader: checkLogin
  },
  {
    path: '/input-page/category',
    element: <InputPage />,
    loader: checkLogin,
  },
  {
    path: '/register-page',
    element: <InputPage />,
    loader: checkLogin,
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        throw redirect("/");
      }

      return null
    }
  }
])

export default router