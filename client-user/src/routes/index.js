import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import DetailPage from '../pages/DetailPage'
import HomePage from '../pages/HomePage'

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
        path: '/product/:id',
        element: <DetailPage />
      }
    ]
  }
])

export default router