import Table from '../components/Table'
import AddButton from '../components/AddButton'
import { useEffect } from 'react'
import { fetchGet } from '../helpers/fetch'
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { setCategoryList, setProductList, resetEditData, setPathNow } from '../store/actions/actionCreator'

export default function HomePage() {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathNow = useSelector((state) => state.general.pathNow)

  const fetchProduct = async () => {
    const response = await fetchGet('products')
    dispatch(setProductList(response))
  }

  const fetchCategory = async () => {
    const response = await fetchGet('categories')
    dispatch(setCategoryList(response))
  }
  
  const resetEdit = () => {
    dispatch(resetEditData())
  }

  useEffect(() => {
    dispatch(setPathNow(location.pathname))
    resetEdit()
    fetchProduct()
    fetchCategory()
  }, [location.pathname])
  

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-14vh)] flex justify-center items-end">
        <div className="container h-full p-10" >
          <span className="text-6xl text-green-900 flex justify-between items-baseline">
            Dashboard
             {
              pathNow === '/category-page' 
              ?
              <AddButton path='/input-page/category' text='Add Category' />
              :
              <AddButton path="/input-page"  text='Add Product' />
             }          
          </span>
          <br />
          <Table pathNow={pathNow} />
        </div>
      </div>
    </>
  )
}