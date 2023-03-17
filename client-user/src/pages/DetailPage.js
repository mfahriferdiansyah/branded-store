import shopImg from '../images/shop.svg'
import { useEffect } from 'react'
import SecondaryImage from '../components/SecondaryImage'
import Button from '../components/Button'
import { useParams, useNavigate } from 'react-router-dom';
import toast from '../helpers/toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getImages, getProductDetail } from '../store/actions/actionCreator'

export default function DetailPage() {
  const { id } = useParams()
  const backButton = () => {navigate(-1)}
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [images, product] = useSelector((state) => [state.images.imagesList, state.products.productDetail])
  let { name, description, price, mainImg } = product

  const clickHandler = (e) => {
    e.preventDefault();
    toast('Added to wishlist', 'success')
  }

  useEffect(() => {
    dispatch(getImages(id))
    dispatch(getProductDetail(id))
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
