import {createBrowserRouter} from 'react-router-dom'

import {
  DetailPage,
  HomePage
} from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/product/:id',
    element: <DetailPage />
  }
])

export default router