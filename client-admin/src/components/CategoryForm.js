import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {fetchPost, fetchGet, fetchPatch} from '../helpers/fetch'

export default function ReactForm () {
  
  const [categoryForm, setCategoryForm] = useState({})
  const navigate = useNavigate()
  function checkForm(e) {
    e.preventDefault()
    let {name, value} = e.target
    let newInput = {
      ...categoryForm,
      [name]: value
    }
    console.log(newInput)
    setCategoryForm(newInput)
  }

  const isEdit = useSelector((state) => {
    return state.general.isEdit
  })

  const editCategory = useSelector((state) => {
    return state.categories.editCategory
  })

  const [searchParams] = useSearchParams()

  async function formHandler(e) {
    e.preventDefault()
    let newCategory = {
      ...categoryForm
    }
    
    if(!isEdit) await fetchPost('categories', newCategory)
    else await fetchPatch('categories/'+searchParams.get('id'), newCategory)

    setCategoryForm({})
    navigate(-1)
  }

  useEffect(() => {
    if(isEdit) {
      setCategoryForm({
        ...editCategory
      })
    }
  }, [editCategory])

  return (
  <>
    <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
      <input defaultValue={categoryForm.name} onChange={checkForm} type="text" name='name' className="px-3 py-2 shadow-md rounded-md" placeholder="Category Name"  required/>
      <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">
      {
        isEdit ? 'Edit Category' : 'Add New Category'
      }
      </button>
    </form>
  </>
  )
}