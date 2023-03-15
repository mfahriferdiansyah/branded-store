import {Link} from 'react-router-dom'
import toast from '../helpers/toastify'

export default function Navbar() {
  const errorHandler = (e) => {
    e.preventDefault();
    toast('Under construction', 'error')
  }
  
  return (
    <>
      <nav className="h-[8vh] bg-white flex justify-between w-full px-16">
        <div className="justify-center items-center flex w-20">
          <p className="font-serif text-2xl font-semibold text-green-900">React.</p>
        </div>
        <div className="flex justify-center font-mono items-center text-start gap-20">
          <Link to="/" className="text-lg font-semibold text-center">Home</Link>
          <button onClick={errorHandler} className="text-lg font-semibold">Product</button>
          <button onClick={errorHandler} href="/" className="text-lg font-semibold">Wishlist</button>
        </div>
        <div className="justify-center items-center flex w-20">
          <svg onClick={errorHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </>
  )
}   