import TableRow from './TableRow'
import {useState, useEffect} from 'react'

export default function Table() {

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
      console.log(data)
      let newProducts = [...data]
      setProducts(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <table className="text-2xl w-full h-full overflow-y-scroll">
        <thead className="border-b-2 border-green-700">
          <tr className="flex px-5 text-green-800 justify-start text-start font-mono">
            <td className="basis-1/12">No.</td>
            <td className="basis-7/12">Product</td>
            <td className="basis-3/12">Price</td>
            <td className="basis-1/12">Action</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map((el, index) => <TableRow key={el.id} index={++index} data={el} />)
          }
        </tbody>
      </table>
    </>
  )
}