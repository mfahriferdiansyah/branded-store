import Table from '../components/Table'
import { useEffect } from 'react'
import { fetchGet } from '../helpers/fetch'
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
  const dispatch = useDispatch()
  const location = useLocation()
  dispatch({
    type: 'pathNow/assign',
    payload: location.pathname
  })
  const pathNow = useSelector((state) => state.pathNow)

  const fetchProduct = async () => {
    const response = await fetchGet('products')
    const action = {
      type: 'product/fetchSuccess',
      payload: response
    }
    dispatch(action)
  }

  const fetchCategory = async () => {
    const response = await fetchGet('categories')
    const action = {
      type: 'category/fetchSuccess',
      payload: response
    }
    dispatch(action)
  }
  
  const resetEdit = () => {
    const action = {
      type: 'resetEdit'
    }
    dispatch(action)
  }

  useEffect(() => {
    console.log(pathNow)
    resetEdit()
    fetchProduct()
    fetchCategory()
  }, [])
  

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-14vh)] flex justify-center items-end">
        <div className="container h-full p-10" >
          <p className="text-6xl text-green-900 whitespace-nowrap">
            {
              pathNow === '/category-page' ? <p>Dashboard</p> : <p>Dashboard</p>
            }
          </p>
          <br />
          <Table pathNow={pathNow} />
        </div>
      </div>
    </>
  )
}