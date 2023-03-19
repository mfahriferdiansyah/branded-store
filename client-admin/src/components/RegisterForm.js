import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../helpers/toast'
import { postUser } from '../store/actions/actionCreator'

export default function ReactForm () {
  
  const [registerForm, setRegisterForm] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function checkForm(e) {
    e.preventDefault()
    let {name, value} = e.target
    let newInput = {
      ...registerForm,
      [name]: value
    }
    setRegisterForm(newInput)
  }

  async function formHandler(e) {
    e.preventDefault()
    if(!registerForm.username) errorToast('Username required')
    else if(!registerForm.email) errorToast('Email is required')
    else if (!registerForm.password) errorToast ('Password is requried')
    else {
      await dispatch(postUser({...registerForm}))
      .then(() => navigate(-1))
      .then(() => successToast('User registered'))
      .catch((error) => errorToast(error))
      setRegisterForm({})
    }
  }


  return (
  <>
    <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
      <input onChange={checkForm} type="text" name='username' className="px-3 py-2 shadow-md rounded-md" placeholder="Username"  />
      <input onChange={checkForm} type="text" name='email' className="px-3 py-2 shadow-md rounded-md" placeholder="Email"  />
      <input onChange={checkForm} type="password" name='password' className="px-3 py-2 shadow-md rounded-md" placeholder="Password" />
      
      <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">
        Register
      </button>
    </form>
  </>
  )
}