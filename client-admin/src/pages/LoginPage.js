import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../helpers/toast'
import loginLogo from '../assets/loginLogo.png'
import { postLogin } from '../store/actions/actionCreator'

export default function LoginPage() {

  const [credential, setCredential] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()


  function checkCredential(e) {
    let { value, name } = e.target
    const newCredential = {
      ...credential,
      [name]: value
    }
    setCredential(newCredential)
  }

  async function loginHandler(e) {
    e.preventDefault()
    console.log(credential)
    if (!credential.email) errorToast('Email is required')
    else if (!credential.password) errorToast('Password is required')
    else {
      await dispatch(postLogin({ ...credential }))
        .then(() => successToast('Login success'))
        .then(() => navigate('/'))
        .catch((error) => errorToast(error))
    }
  }

  return (
    <>
      <div className="h-screen bg-stone-200 relative w-screen flex justify-center items-center">
        <div className=" bg-zinc-100 py-5 shadow-2xl rounded-lg flex">
          <div className=" w-full justify-center items-center flex flex-col gap-5 py-10 ">
            <div className="flex flex-col justify-start w-2/3 gap-2">
              <p className="text-stone-900 text-4xl text-start justify-self-start">Login</p>
              <p className="text-start">Welcome, please login first.</p>
            </div>
            <form action="" onSubmit={loginHandler} className="flex flex-col gap-5 w-2/3">
              <div className="justify-center flex flex-col gap-3">
                <input onChange={checkCredential} type="text" name="email" className="px-3 py-2 shadow-md rounded-md" placeholder="Email" />
                <input onChange={checkCredential} type="password" name="password" className="px-3 py-2 shadow-md rounded-md" placeholder="Password" />
                <button type="submit" className="py-1 mt-3 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">Login</button>
              </div>
            </form>
          </div>
          <div className="flex h-full w-full p-5 mr-7">
            <img src={loginLogo} alt="login-logo" className="shadow-xl rounded-md bg-stone-400" />
          </div>
        </div>
      </div>
    </>
  );
}
