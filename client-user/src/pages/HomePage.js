import {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import { fetchGet } from '../helpers/fetch'

export default function HomePage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetchGet('products')
      let newProducts = [...response]
      setProducts(newProducts)
    }
    fetchProduct()
  }, [])

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-8vh)] w-screen flex justify-center items-end">
        <div className="container h-full p-10" >
          <div className="text-center"> 
          <p className="text-6xl text-green-800 ">Home</p>
          </div>
          <p className="text-lg font-semibold text-green-800">Welcome, know that I am filled with joy having you today!</p>
          <hr className='border-green-700' />
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