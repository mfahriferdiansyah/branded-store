import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import loginLogo from '../images/loginLogo.png'

export default function LoginPage() {

  const [credential, setCredential] = useState({})
  const navigate = useNavigate()
  
  function checkCredential(e) {
    let {value, name} = e.target
    const newCredential = {
      ...credential,
      [name]: value
    }
    setCredential(newCredential)
  }

  function loginHandler(e) {
    e.preventDefault()
    localStorage.access_token = 'iniAksesToken'
    console.log('Login dengan ->>', credential)
    console.log(localStorage.getItem('access_token'))
    navigate('/')
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
            <form action=""  onSubmit={loginHandler} className="flex flex-col gap-5 w-2/3">
              <div className="justify-center flex flex-col gap-3">
              <input onChange={checkCredential} type="email" name="loginEmail" className="px-3 py-2 shadow-md rounded-md" placeholder="Email" required/>
              <input onChange={checkCredential} type="password" name="loginPassword" className="px-3 py-2 shadow-md rounded-md" placeholder="Password" required />
              <button type="submit" className="py-1 mt-3 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">Login</button>
              </div>
            </form>
          </div>
          <div className="flex h-full w-full p-5 mr-7">
            <img src={loginLogo} alt="" className="shadow-xl rounded-md bg-stone-400"  />
          </div>
        </div>
      </div>
    </>
  );
}
