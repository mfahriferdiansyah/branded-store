import CreateImg from '../assets/create.svg'
import ProductForm from '../components/ProductForm'
import RegisterForm from '../components/RegisterForm'
import CategoryForm from '../components/CategoryForm'
import Loading from '../components/Loading'

import { useEffect } from 'react'
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryById, getImages, getProductById, resetEditData, setIsEdit, } from '../store/actions/actionCreator'

export default function InputPage() {
  const navigate = useNavigate()
  const closeForm = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const location = useLocation()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const [ isEdit, isLoading]= useSelector((state) => [ state.general?.isEdit, state.general?.isLoading])

  const productId = searchParams.get('productId')
  const categoryId = searchParams.get('id')

  useEffect(() => {
    let payload;

    if (productId) {
      payload = true
      dispatch(resetEditData())
      dispatch(getProductById(productId))
      dispatch(getImages(productId))
    }
    else if (categoryId) {
      payload = true
      dispatch(getCategoryById(categoryId))
    }
    else {
      payload = false
      dispatch(resetEditData())
    }

    dispatch(setIsEdit(payload))
  }, [])

  if(isLoading) return <Loading />

  return (
    <>
      <div className="h-screen bg-stone-300 relative w-screen flex justify-center items-center bg-opacity-20">
        <div className="flex p-10 relative rounded-md shadow-md bg-stone-200">
          <button onClick={closeForm} className="absolute top-0 right-0 m-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col gap-5 w-auto h-3/4 justify-center ">
            <div className="flex flex-col justify-start w-2/3 gap-2">
              <p className="text-stone-900 text-4xl text-start justify-self-start whitespace-nowrap ">
                {
                  location.pathname === '/input-page' ? isEdit ? 'Edit Product' : 'Add New Product' :
                  location.pathname === '/input-page/category' ? isEdit ? 'Edit Category' : 'Add New Category' :
                  location.pathname === '/register-page' ? 'Register New Admin' : 'Form'
                }
              </p>
              <p className="text-start whitespace-nowrap">Please fill all the requirement below.</p>
            </div>
            <div className="flex w-full gap-5 mx-5">
              {
                location.pathname === '/input-page' ? <ProductForm /> :
                location.pathname === '/register-page' ? <RegisterForm /> :
                location.pathname === '/input-page/category' ? <CategoryForm /> : ''
              }
            </div>
          </div>
          <div>
            <div className="flex h-full w-full items-end px-5 mr-7">
              <img className="h-60" alt="input-img" src={CreateImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
