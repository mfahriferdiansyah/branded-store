import Table from '../components/Table'
import { useEffect } from 'react'
import { fetchGet } from '../helpers/fetch'
import {useDispatch, useSelector} from 'react-redux'

export default function HomePage() {
  const dispatch = useDispatch()
  const resetEdit = () => {
    const action = {
      type: 'resetEdit'
    }
    dispatch(action)
  }
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetchGet('products')
      const action = {
        type: 'product/fetchSuccess',
        payload: response
      }
      dispatch(action)
    }
    resetEdit()
    fetchProduct()
  }, [])
  

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-14vh)] flex justify-center items-end">
        <div className="container h-full p-10" >
          <p className="text-6xl text-green-900">Dashboard</p>
          <br />
          <Table />
        </div>
      </div>
    </>
  )
}