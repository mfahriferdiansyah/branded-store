export default function InputPage() {
  return (
    <>
      <div class="h-screen bg-stone-300 relative w-screen flex justify-center items-center">
        <div className="flex flex-col bg-stone-200 gap-5 w-2/3 h-full">
           <div class="flex flex-col justify-start w-2/3 gap-2">
            <p class="text-stone-900 text-4xl text-start justify-self-start">Add New Product Form</p>
            <p class="text-start">Please fill all the requirement below.</p>
            </div>
            <form action="" class="flex flex-col w-60 gap-5 mx-5">
              <input type="text" class="px-3 py-2 shadow-md rounded-md"  placeholder="Name" />
              <input type="text" class="px-3 py-2 shadow-md rounded-md"  placeholder="Price" />
              <input type="text" class="px-3 py-2 shadow-md rounded-md"  placeholder="ImageUrl" />
              <select name="" class="px-3 py-2 shadow-md rounded-md"  >
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
              <button type="submit" class="py-1 mt-2 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">Add New Product</button>
            </form>
        </div>
      </div>
    </>
  );
}
