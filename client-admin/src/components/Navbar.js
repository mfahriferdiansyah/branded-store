export default function Navbar() {
  return (
    <>
      <nav className="h-[8vh] bg-white flex justify-between border w-full px-16">
        <div className="justify-center items-center flex w-6">
          <p className="font-serif text-2xl font-semibold">React.</p>
        </div>
        <div className="flex justify-center font-mono items-center text-start gap-20">
          <a href="/" className="text-lg font-semibold text-center">Dashboard</a>
          <a href="/" className="text-lg font-semibold">Add Product</a>
          <a href="/" className="text-lg font-semibold">Contact</a>
        </div>
        <div className="justify-center items-center flex w-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </>
  )
}   