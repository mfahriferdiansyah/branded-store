import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import InputPage from "../pages/InputPage";

export default function Navbar() {

  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)

  // const productHandler = () => {
  //   setShowForm(!showForm)
  //   console.log('masuk', showForm);
  // }

  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
      <nav className="sticky top-0 z-50 h-[8vh] bg-white flex justify-between w-full px-16">
        <div className="justify-center items-center flex w-20">
          <p className="font-serif text-2xl font-semibold text-green-900">React.</p>
        </div>
        <div className="flex justify-center font-mono items-center text-start gap-20">
          <Link to="/" className="text-lg font-semibold text-center">Dashboard</Link>
          <Link  to="/input-page" className="text-lg font-semibold">Add Product</Link>
          <Link to="/register-page" className="text-lg font-semibold">Register</Link>
        </div>
        <div className="justify-center items-center flex w-20">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6 cursor-pointer stroke-green-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> */}
          <Link onClick={logoutHandler} className="text-lg font-semibold">Logout</Link>
        </div>
      </nav>
    </>
  )
}   