export default function ReactForm () {
  return (
  <>
    <form action="" className="flex flex-col w-60 gap-5 mx-5">
      <input type="text" className="px-3 py-2 shadow-md rounded-md" placeholder="Name" />
      <input type="text" className="px-3 py-2 shadow-md rounded-md" placeholder="Price" />
      <input type="text" className="px-3 py-2 shadow-md rounded-md" placeholder="Main Image" />
      <input type="text" className="px-3 py-2 shadow-md rounded-md" placeholder="2nd Image" />
      <input type="text" className="px-3 py-2 shadow-md rounded-md" placeholder="3rd Image" />
      <input type="text" className="px-3 py-2 shadow-md rounded-md" placeholder="4th Image" />
      <select name="" className="px-3 py-2 shadow-md rounded-md"  >
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
      <button type="submit" className="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">Add New Product</button>
    </form>
  </>
  )
}