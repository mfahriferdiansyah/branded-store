import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {fetchPost, fetchGet, fetchPatch} from '../helpers/fetch'

export default function ReactForm () {
  
  const [productForm, setProductForm] = useState({})
  const navigate = useNavigate()
  function checkForm(e) {
    e.preventDefault()
    let {name, value} = e.target

    let newInput = {
      ...productForm,
      [name]: value
    }
    setProductForm(newInput)
  }

  const isEdit = useSelector((state) => {
    return state.general.isEdit
  })

  const editImg = useSelector((state) => {
    return state.images.editImg
  })

  const editProduct = useSelector((state) => {
    return state.products.editProduct
  })

  const [searchParams] = useSearchParams()

  async function formHandler(e) {
    e.preventDefault()
    let response 
    let newProduct = {
      ...productForm
    }
    let {name, price, mainImg, img2, img3, description, categoryId} = newProduct
    let slug = name.toLowerCase().split(' ').join('-')
    let productData = {name, price: parseFloat(price), mainImg, description, categoryId: parseFloat(categoryId), authorId:1, slug}

    if(!isEdit) response = await fetchPost('products', productData)
    else response = await fetchPatch('products/'+searchParams.get('productId'), productData)

    if(response.id) {
      let productId = response.id
        if(!isEdit) {
          await fetchPost('images', {imgUrl: img2 || '', productId})
          await fetchPost('images', {imgUrl: img3 || '', productId})
        }
        else {
          await fetchPatch('images/'+editImg[0].id, {imgUrl: img2, productId}) 
          await fetchPatch('images/'+editImg[1].id, {imgUrl: img3, productId}) 
        }
    }
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
      <select  defaultValue={productForm?.categoryId} onChange={checkForm} name="categoryId" className="px-3 py-2 shadow-md rounded-md" required >
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