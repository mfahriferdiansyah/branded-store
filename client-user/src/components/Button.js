import { Link } from "react-router-dom";

export default function Button({path, text}) {
  return (
    <>
      <Link to={path} type="submit" className="py-1 mt-3 w-full text-center rounded-md text-lg hover:bg-green-800 bg-green-900 text-white">{text}</Link>
    </>
  )
}