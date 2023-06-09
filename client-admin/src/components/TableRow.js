import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../helpers/toast'
import { deleteCategory, deleteProduct, getImages, setIsModal } from '../store/actions/actionCreator'

export default function TableRow({index, data}) {
  const navigate = useNavigate()
  let {id, name, price, slug, description, mainImg, User, Category} = data
  const location = useLocation()
  const isModal = useSelector((state) => state.general?.isModal)
  
  const dispatch = useDispatch()
  async function deleteHandler(e) {
    if(location.pathname === '/category-page') {
      await dispatch(deleteCategory(id))
        .then(() => successToast('Category deleted'))
        .catch((error) => errorToast(error))
    }
    else if(location.pathname === '/') {
      await dispatch(deleteProduct(id))
      .then(() => successToast('Product deleted'))
      .catch((error) => errorToast(error))
    }
  }

  async function editHandler(e){
    if(location.pathname === '/category-page') navigate('/input-page/category?id='+id)
    else if(location.pathname === '/') navigate('/input-page?productId='+id)
  }

  async function openImage(e){
    dispatch(getImages(id))
    dispatch(setIsModal(!isModal))
  }

  return (
    <>
      <tr className="flex px-5 py-3 font-mono">
        <td className="basis-1/12">{index}</td>
        {
          location.pathname === '/' ?<>          
            <td className="basis-7/12">
              <div className="flex gap-5">
                <img className="rounded-md  w-44" src={mainImg} alt={slug} />
                <div className="flex flex-col justify-between gap-10">
                <div className='flex flex-col gap-3'>
                  <p>{name} <span className='text-sm'>({Category?.name})</span></p>
                  <p className="text-sm">{description}</p>
                  <p className="text-sm">Authors: {User?.username}</p>
                </div>
                <div className='flex justify-start items-start h-full'>                  
                <button
                    type="button"
                    className="inline-flex w-52 justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600"
                    onClick={openImage}
                  >
                    More Images
                  </button>
                </div>
                </div>
              </div>
            </td>
            <td className="basis-3/12 whitespace-nowrap"> {price?.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
          </> : <>
            <td className="basis-10/12">{name}</td>
          </>
        }
        <td className="basis-1/12">
          <div className="flex gap-5 justify-start items-end">
            <button onClick={editHandler}>            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
            <button  onClick={deleteHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}