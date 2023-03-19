import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { errorToast, successToast } from '../helpers/toast'
import { patchCategory, postCategory } from '../store/actions/actionCreator'

export default function ReactForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [categoryForm, setCategoryForm] = useState({})
  const [searchParams] = useSearchParams()
  const [isEdit, editCategory] = useSelector((state) => {
    return [state.general?.isEdit, state.categories?.editCategory]
  })

  function checkForm(e) {
    e.preventDefault()
    let { name, value } = e.target
    let newInput = {
      ...categoryForm,
      [name]: value
    }
    console.log(newInput)
    setCategoryForm(newInput)
  }

  async function formHandler(e) {
    e.preventDefault()
    let newCategory = {
      ...categoryForm
    }
    if (!newCategory.name) {
      errorToast('Name is required')
    } else {
      if (!isEdit) {
        await dispatch(postCategory(newCategory))
          .then(() => {
            successToast('Category added')
            setCategoryForm({})
            navigate(-1)
          })
          .catch((error) => errorToast(error));
      }
      else {
        await dispatch(patchCategory({
          id: searchParams.get('id'),
          newCategory
        }))
          .then(() => {
            successToast('Category edited')
            setCategoryForm({})
            navigate(-1)
          })
          .catch((error) => errorToast(error));
      }
    }
  }

  useEffect(() => {
    if (isEdit) {
      setCategoryForm({
        ...editCategory
      })
    }
  }, [editCategory])

  return (
    <>
      <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
        <input defaultValue={categoryForm.name} onChange={checkForm} type="text" name='name' className="px-3 py-2 shadow-md rounded-md" placeholder="Category Name" />
        <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">
          {
            isEdit ? 'Edit Category' : 'Add New Category'
          }
        </button>
      </form>
    </>
  )
}