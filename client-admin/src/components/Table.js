import TableRow from './TableRow'
import {useState, useEffect} from 'react'
import {fetchGet} from '../helpers/fetch'

export default function Table() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetchGet('products')
      console.log(response)
      let newProducts = [...response]
      setProducts(newProducts)
    }
      fetchData()
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