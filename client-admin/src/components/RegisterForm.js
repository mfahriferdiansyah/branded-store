import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
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
    dispatch(postUser({...registerForm}))
    setRegisterForm({})
    navigate(-1)
  }

  useEffect(() => {
  }, [])

  return (
  <>
    <form action="" onSubmit={formHandler} className="flex flex-col w-60 gap-5 mx-5">
      <input onChange={checkForm} type="email" name='email' className="px-3 py-2 shadow-md rounded-md" placeholder="Email"  required/>
      <input onChange={checkForm} type="password" name='password' className="px-3 py-2 shadow-md rounded-md" placeholder="Password" required/>
      
      <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">
        Register
      </button>
    </form>
  </>
  )
}