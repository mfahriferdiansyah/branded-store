import Table from '../components/Table'
import AddButton from '../components/AddButton'
import ImageModal from '../components/ImageModal'
import Loading from '../components/Loading'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { resetEditData, getCategories, getProducts, setIsLoading } from '../store/actions/actionCreator'
import { errorToast } from '../helpers/toast'

export default function HomePage() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [isModal, isLoading] = useSelector((state) => [state.general?.isModal, state.general?.isLoading])

  useEffect(() => {
    dispatch(resetEditData())
    dispatch(getProducts())
    dispatch(getCategories())
  }, [location.pathname])


  if (isLoading) return <Loading />

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-14vh)] flex justify-center items-end">
        <div className="container h-full p-10" >
          <span className="text-6xl text-green-900 flex justify-between items-baseline">
            Dashboard
            {
              location.pathname === '/category-page'
                ?
                <AddButton path='/input-page/category' text='Add Category' />
                :
                <AddButton path="/input-page" text='Add Product' />
            }
          </span>
          <br />
          <Table />
        </div>
      </div>
      {
        isModal ? <ImageModal /> : ''
      },
    </>
  )
}