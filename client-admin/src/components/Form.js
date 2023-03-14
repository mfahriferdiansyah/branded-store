import {useState, useEffect} from 'react'
import {fetchPost} from '../helpers/fetch'

export default function ReactForm () {
  const [productForm, setProductForm] = useState({})
  
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
    const response = await fetchPost('products', productForm)
    console.log(response)
    if(response.id) {
      let productId = response.id
      if(productForm.img2) {
        const fetchImg2 = await fetchPost('images', {imgUrl: productForm.img2, productId})
        console.log(fetchImg2)
      }
      if(productForm.img3) {
        const fetchImg2 = await fetchPost( 'images', {imgUrl: productForm.img2, productId})
        console.log(fetchImg2)
      }
    }
    setProductForm({})
  }

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
      <select onChange={checkForm} name="categoryId" className="px-3 py-2 shadow-md rounded-md" required >
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
      <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">Add New Product</button>
    </form>
  </>
  )
}