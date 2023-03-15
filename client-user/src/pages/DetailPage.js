import shopImg from '../images/shop.svg'
import { useState, useEffect } from 'react'
import SecondaryImage from '../components/SecondaryImage'
import Button from '../components/Button'
import { fetchGet } from '../helpers/fetch'
import { useParams, useNavigate } from 'react-router-dom';
import toast from '../helpers/toastify'

export default function DetailPage() {
  const { id } = useParams()
  const [images, setImages] = useState([])
  const [product, setProduct] = useState({})
  let { name, description, price, mainImg } = product
  const navigate = useNavigate()
  const backButton = () => {
    navigate(-1)
  }

  const clickHandler = (e) => {
    e.preventDefault();
    toast('Added to wishlist', 'success')
  }

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetchGet(`images?productId=${id}`)
      console.log(response, 'Response from get')
      setImages(response)
    }
    const fetchProduct = async () => {
      const response = await fetchGet(`products?id=${id}`)
      console.log(response, 'Response from get')
      setProduct(response[0])
      console.log(product)
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
                src={mainImg}
                alt=""
              />
            </div>
            <div className='flex flex-col justify-between relative'>
              <div className="px-5 flex flex-col gap-5 text-start text-2xl justify-start w-96">
                  <svg  onClick={backButton} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                {/* Title */}
                <div className="">{name}</div>
                {/* Price */}
                <div className="font-mono text-stone-700  text-3xl">{price?.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                {/* Description */}
                <div className="text-stone-400 text-xl">{description}</div>
                <div onClick={clickHandler}>
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
