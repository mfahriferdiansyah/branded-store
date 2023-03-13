import loveImg from '../images/love.svg'
import shopImg from '../images/shop.svg'
import SecondaryImage from '../components/SecondaryImage'
import Button from '../components/Button'

const imgUrl =
  "https://www.armani.com/variants/images/38063312418554598/F/w1280.jpg";

export default function DetailPage() {
  return (
    <>
      <div className="font-serif relative h-[calc(100vh-8vh)] w-screen flex justify-center items-end">
        <div className="container h-full p-10">
          <div className="flex gap-20 w-full">
            {/* Card Image */}
            <div className="flex gap-10 w-1/2">
              <div className="flex flex-col gap-5">
                <SecondaryImage />
                <SecondaryImage />
                <SecondaryImage />
                <SecondaryImage />
              </div>
              <img
                className="h-128 rounded-3xl shadow-sm"
                src="https://www.armani.com/variants/images/38063312418554598/F/w1280.jpg"
                alt=""
              />
            </div>
            <div className='flex flex-col justify-between relative'>
              <div className="px-5 flex flex-col gap-5 text-start text-2xl justify-start w-96">
                {/* Title */}
                <div className="">White Sneaker</div>
                {/* Price */}
                <div className="font-mono text-stone-700  text-3xl">$400</div>
                {/* Description */}
                <div className="text-stone-400 text-xl">Ini deskripsi sepatu yang barusan ditampilkan melalui detyail, ini juga text buat test div lebar detail</div>
              <div>
                <Button text="Save to wishlist" />
              </div>
              </div>
                <div className='flex justify-start'>
                  <img className='absolute -bottom-5 scale-125 h-96 hover:opacity-95' src={shopImg} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
