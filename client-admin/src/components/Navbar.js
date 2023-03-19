import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()

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
          <Link to="/" className="text-lg font-semibold text-center">Product</Link>
          <Link  to="/category-page" className="text-lg font-semibold">Categories</Link>
          <Link to="/register-page" className="text-lg font-semibold">Register</Link>
        </div>
        <div className="justify-center items-center flex w-20">
          <button onClick={logoutHandler} className="text-lg font-semibold">Logout</button>
        </div>
      </nav>
    </>
  )
}   