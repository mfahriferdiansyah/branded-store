import {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'

export default function HomePage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/products")
    .then(response => {
      if(!response.ok) {
        throw new Error ("Something went wrong")
      }
      return response.json()
    })
    .then(data => {
      console.log(data, 'ini data')
      let newProducts = [...data]
      setProducts(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-8vh)] w-screen flex justify-center items-end">
        <div className="container h-full p-10" >
          <p className="text-6xl text-green-900">Home</p>
          <hr />
          <div className="flex flex-wrap py-5 gap-11">
            {
              products.map(el => <ProductCard key={el.id} data={el} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}