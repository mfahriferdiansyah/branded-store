import Table from '../components/Table'
import AddButton from '../components/AddButton'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useLocation} from 'react-router-dom'
import { resetEditData, setPathNow, getCategories, getProducts } from '../store/actions/actionCreator'
import ImageModal from '../components/ImageModal'

export default function HomePage() {
  const dispatch = useDispatch()
  const location = useLocation()
  const isModal = useSelector((state) => state.general.isModal)
  const pathNow = location.pathname

  useEffect(() => {
    dispatch(setPathNow(location.pathname))
    dispatch(resetEditData())
    dispatch(getProducts())
    dispatch(getCategories())
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
      {
        isModal ? <ImageModal /> : ''
      }
    </>
  )
}