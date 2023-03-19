import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { errorToast, successToast } from '../helpers/toast'
import { patchProducts, postProducts, setCategoryList } from '../store/actions/actionCreator'

export default function ReactForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [productForm, setProductForm] = useState({})

  function checkForm(e) {
    e.preventDefault()
    let { name, value } = e.target
    let newInput = {
      ...productForm,
      [name]: value
    }
    setProductForm(newInput)
  }

  const [isEdit, editImg, editProduct, categoryList] = useSelector((state) => {
    return [state.general?.isEdit, state.images?.editImg, state.products?.editProduct, state.categories?.categoryList]
  })

  async function formHandler(e) {
    e.preventDefault()
    let { name, price, mainImg, img2, img3, description, categoryId = 1 } = { ...productForm }
    let slug = name?.toLowerCase().split(' ').join('-') + Date.now()
    let productData = { name, price: parseFloat(price), mainImg, description, categoryId: parseFloat(categoryId), slug, img2, img3 }

    if (!isEdit) {
      dispatch(postProducts(productData))
        .then(() => {
          setProductForm({})
          navigate(-1)
          successToast('Product added')
        })
        .catch((error) => errorToast(error))
    }
    else {
      dispatch(patchProducts({
        product: {
          ...productData,
          imgId2: editImg[0]?.id,
          imgId3: editImg[1]?.id,
        },
        productId: searchParams.get('productId')
      }))
        .then(() => {
          setProductForm({})
          navigate(-1)
          successToast('Product changed')
        })
        .catch((error) => errorToast(error))
    }
  }

  useEffect(() => {
    if (isEdit) {
      setProductForm({
        ...editProduct,
        img2: editImg[0]?.imgUrl, img3: editImg[1]?.imgUrl
      })
    }
  }, [editProduct, editImg])

  return (
    <>
      <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
        <input defaultValue={productForm?.name} onChange={checkForm} type="text" name='name' className="px-3 py-2 shadow-md rounded-md" placeholder="Name" />
        <input defaultValue={productForm?.price} onChange={checkForm} type="number" name='price' className="px-3 py-2 shadow-md rounded-md" placeholder="Price" />
        <input defaultValue={productForm?.mainImg} onChange={checkForm} type="text" name='mainImg' className="px-3 py-2 shadow-md rounded-md" placeholder="Main Image" />
        <div className='flex gap-2'>
          <input defaultValue={productForm?.img2} onChange={checkForm} type="text" name='img2' className="w-1/2 py-2 px-3 shadow-md rounded-md" placeholder="2nd Image" />
          <input defaultValue={productForm?.img3} onChange={checkForm} type="text" name='img3' className="w-1/2 py-2 px-3 shadow-md rounded-md" placeholder="3rd Image" />
        </div>
        <input defaultValue={productForm?.description} onChange={checkForm} type="text" name='description' className="px-3 py-2 shadow-md rounded-md" placeholder="Description" />
        <select defaultValue={productForm?.categoryId || '1'} onChange={checkForm} name="categoryId" className="px-3 py-2 shadow-md rounded-md"  >
          {
            categoryList?.map((el) => <option value={el?.id} key={el?.id}>{el?.name}</option>)
          }
        </select>

        <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">
          {
            isEdit ? 'Edit Product' : 'Add New Product'
          }
        </button>
      </form>
    </>
  )
}