import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useSearchParams} from 'react-router-dom'
import { patchProducts, postProducts } from '../store/actions/actionCreator'

export default function ReactForm () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [productForm, setProductForm] = useState({})

  function checkForm(e) {
    e.preventDefault()
    let {name, value} = e.target
    let newInput = {
      ...productForm,
      [name]: value
    }
    setProductForm(newInput)
  }

  const [isEdit, editImg, editProduct] = useSelector((state) => {
    return [state.general.isEdit, state.images.editImg, state.products.editProduct]
  })

  async function formHandler(e) {
    e.preventDefault()
    let {name, price, mainImg, img2, img3, description, categoryId=1} = {...productForm}
    let slug = name.toLowerCase().split(' ').join('-')
    let productData = {name, price: parseFloat(price), mainImg, description, categoryId: parseFloat(categoryId), authorId:1, slug}

    if(!isEdit) dispatch(postProducts(productData, img2, img3))
    else dispatch(patchProducts({
      productData, img2, img3, 
      imgId2: editImg[0].id, 
      imgId3: editImg[1].id, 
      productId: searchParams.get('productId')
    }))

    setProductForm({})
    navigate(-1)
  }

  useEffect(() => {
    if(isEdit) {
      setProductForm({
        ...editProduct,
        img2: editImg[0]?.imgUrl, img3: editImg[1]?.imgUrl
      })
    }
  }, [editProduct, editImg])

  return (
  <>
    <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
      <input defaultValue={productForm?.name} onChange={checkForm} type="text" name='name' className="px-3 py-2 shadow-md rounded-md" placeholder="Name"  required/>
      <input defaultValue={productForm?.price} onChange={checkForm} type="number" name='price' className="px-3 py-2 shadow-md rounded-md" placeholder="Price" required/>
      <input defaultValue={productForm?.mainImg} onChange={checkForm} type="text" name='mainImg' className="px-3 py-2 shadow-md rounded-md" placeholder="Main Image" required/>
      <div className='flex gap-2'>
      <input defaultValue={productForm?.img2} onChange={checkForm} type="text" name='img2' className="w-1/2 py-2 px-3 shadow-md rounded-md" placeholder="2nd Image"/>
      <input defaultValue={productForm?.img3} onChange={checkForm} type="text" name='img3' className="w-1/2 py-2 px-3 shadow-md rounded-md" placeholder="3rd Image"/>
      </div>
      <input defaultValue={productForm?.description} onChange={checkForm} type="text" name='description' className="px-3 py-2 shadow-md rounded-md" placeholder="Description" required/>
      <select  defaultValue={productForm?.categoryId || '1'} onChange={checkForm} name="categoryId" className="px-3 py-2 shadow-md rounded-md" required >
        <option value="1">Shoes</option>
        <option value="2">Hat</option>
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