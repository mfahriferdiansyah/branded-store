import Button from '../components/Button'
const imgUrl = "https://www.armani.com/variants/images/38063312418554598/F/w1280.jpg"

export default function ProductCard() {
  return (
    <>
      <div className="w-64 h-96 relative flex shadow-sm rounded-md">
        <div className="absolute inset-0 bg-cover bg-center z-0 hover:bg-opacity-20" style={{ backgroundImage: `url("${imgUrl}")` }} >
          <div className="flex flex-col w-full h-full opacity-0 hover:opacity-100 hover:bg-stone-900 hover:bg-opacity-10 justify-between py-7">
            <div className="px-5 flex flex-col gap-5 text-start text-2xl ">
              {/* Title */}
              <div className="">
                White Sneaker
              </div>
              {/* Price */}
              <div className="font-mono ">
                $400
              </div>
            </div>
            <div className="w-full flex justify-center px-5">
              <Button text="Detail" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}