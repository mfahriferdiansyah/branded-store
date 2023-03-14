import {createBrowserRouter} from 'react-router-dom'

import {
  HomePage,
  InputPage,
  LoginPage
} from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/input',
    element: <InputPage />
  }
])

export default router