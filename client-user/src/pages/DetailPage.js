import loveImg from '../images/love.svg'
import shopImg from '../images/shop.svg'
import {useState, useEffect} from 'react'
import SecondaryImage from '../components/SecondaryImage'
import Button from '../components/Button'
import { fetchGet } from '../helpers/fetch'

export default function DetailPage() {
  const params = 1
  const [images, setImages] = useState([])
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetchGet(`images?productId=${params}`)
      console.log(response, 'Response from get')
      setImages(response)
    }
    const fetchProduct = async () => {
      const response = await fetchGet(`products?id=${params}`)
      console.log(response, 'Response from get')
      setImages(response)
    }
    fetchImages()
    fetchProduct()
  }, [])

  return (
    <>
      <div className="font-serif relative h-[calc(100vh-8vh)] w-screen flex justify-center items-end text-stone-700">
        <div className="container h-full p-10">
          <div className="flex gap-20 w-full">
            {/* Card Image */}
            <div className="flex gap-10 w-1/2">
              <div className="flex flex-col gap-5">
                {
                  images.map(el => <SecondaryImage key={el.id} data={el} />)
                }
              </div>
              <img
                className="h-128 rounded-3xl shadow-sm"
                src={product.mainImg}
                alt=""
              />
            </div>
            <div className='flex flex-col justify-between relative'>
              <div className="px-5 flex flex-col gap-5 text-start text-2xl justify-start w-96">
                {/* Title */}
                <div className="">{product.name}</div>
                {/* Price */}
                <div className="font-mono text-stone-700  text-3xl">{product.price?.toLocaleString("en-US", {style:"currency", currency:"USD"})}</div>
                {/* Description */}
                <div className="text-stone-400 text-xl">{product.description}</div>
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
