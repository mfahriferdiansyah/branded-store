import {useState, useEffect} from 'react'
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
    console.log(productForm)
  }

  async function formHandler(e) {
    e.preventDefault()
    let response 
    let newProduct = {
      ...productForm
    }
    let {name, price, mainImg, img2, img3, description, categoryId=1} = newProduct
    let productData = {name, price: parseFloat(price), mainImg, description, categoryId: parseFloat(categoryId), authorId:1, slug: name?.toLowerCase().split(' ').join('-')}
    console.log(productData, 'ini product')
    if(!isEdit) response = await fetchPost('products', productData)
    else response = await fetchPatch('products/'+searchParams.get('productId'), productData)
    console.log(response)

    if(response.id) {
      let productId = response.id
      if(img2) {
        let fetchImg2 
        if(!isEdit) fetchImg2 = await fetchPost('images', {imgUrl: productForm.img2, productId})
        else fetchImg2 = await fetchPatch('images/'+images[0].id, {imgUrl: productForm.img2, productId}) 
        console.log(fetchImg2)
      }
      if(img3) {
        let fetchImg3 
        if(!isEdit) fetchImg3 = await fetchPost('images', {imgUrl: productForm.img3, productId})
        else fetchImg3 = await fetchPatch('images/'+images[1].id, {imgUrl: productForm.img3, productId}) 
        console.log(fetchImg3)
      }
    }
    setProductForm({})
    navigate(-1)
  }

  let [searchParams] = useSearchParams();
  const [images, setImages] = useState([])
  const [product, setProduct] = useState({})
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if(searchParams.get('productId')) {
      setIsEdit(true)
      const id = searchParams.get('productId')
      console.log('query true')
      const fetchImages = async () => {
        const response = await fetchGet(`images?productId=${id}`)
        console.log(response, 'Response from get')
        setImages(response)
      }
      const fetchProduct = async () => {
        const response = await fetchGet(`products?id=${id}`)
        console.log(response, 'Response from get')
        setProduct(response[0])
        console.log(product)
      }
      fetchImages()
      fetchProduct()
    }
  }, [])

  return (
  <>
    <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
      <input onChange={checkForm} type="text" name='name' className="px-3 py-2 shadow-md rounded-md" placeholder="Name"  required/>
      <input onChange={checkForm} type="number" name='price' className="px-3 py-2 shadow-md rounded-md" placeholder="Price" required/>
      <input onChange={checkForm} type="text" name='mainImg' className="px-3 py-2 shadow-md rounded-md" placeholder="Main Image" required/>
      <div className='flex gap-2'>
      <input onChange={checkForm} type="text" name='img2' className="w-1/2 py-2 px-3 shadow-md rounded-md" placeholder="2nd Image"/>
      <input onChange={checkForm} type="text" name='img3' className="w-1/2 py-2 px-3 shadow-md rounded-md" placeholder="3rd Image"/>
      </div>
      <input onChange={checkForm} type="text" name='description' className="px-3 py-2 shadow-md rounded-md" placeholder="Description" required/>
      <select  defaultValue={1} onChange={checkForm} name="categoryId" className="px-3 py-2 shadow-md rounded-md" required >
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