import Button from '../components/Button'

export default function ProductCard({data}) {
  let {id, name, slug, descipriton, price, mainImg, User} = data
  
  return (
    <>
      <div className="w-64 h-96 relative flex shadow-xl rounded-lg text-stone-700">
        <div className="absolute inset-0 rounded-lg bg-cover bg-center z-0 hover:bg-opacity-20" style={{ backgroundImage: `url("${mainImg}")` }} >
          <div className="flex flex-col w-full h-full opacity-0 hover:opacity-100 hover:bg-stone-900 hover:bg-opacity-10 justify-between py-7">
            <div className="px-5 flex flex-col gap-5 text-start text-2xl ">
              {/* Title */}
              <div className="">
                {name}
              </div>
              {/* Price */}
              <div className="font-mono ">
                {price?.toLocaleString("en-US", {style:"currency", currency:"USD"})}
              </div>
            </div>
            <div className="w-full flex justify-center px-5">
              <Button text="Detail" path={'/product/'+id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}