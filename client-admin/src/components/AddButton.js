import { Link } from 'react-router-dom'

export default function AddButton ({path, text}) {
  return (
    <>
    <Link  to={path} className="text-lg font-semibold"><span className='text-xl'>+</span>{text}</Link> 
    </>
  )
}