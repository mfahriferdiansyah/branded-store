import TableRow from './TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function Table({pathNow}) {
  let fetchedData = []
  const productList = useSelector((state) => state.products.productList)
  const categoryList = useSelector((state) => state.categories.categoryList)
  if(pathNow === '/') fetchedData = [...productList]
  if(pathNow === '/category-page') fetchedData = [...categoryList]
  return (
    <>
      <table className="text-2xl w-full h-full overflow-y-scroll">
        <thead className="border-b-2 border-green-700">
          <tr className="flex px-5 text-green-800 justify-start text-start font-mono">
            <td className="basis-1/12">No.</td>
            { pathNow === '/' ?  <>
              <td className="basis-7/12">Product</td>
              <td className="basis-3/12">Price</td>
            </> : <>
              <td className="basis-10/12">Category</td>
            </>
            }
            <td className="basis-1/12">Action</td>
          </tr>
        </thead>
        <tbody>
          {
            fetchedData?.map((el, index) => <TableRow key={el.id} index={++index} data={el} pathNow={pathNow} />)
          }
        </tbody>
      </table>
    </>
  )
}