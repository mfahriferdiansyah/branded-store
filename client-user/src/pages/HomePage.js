import ProductCard from '../components/ProductCard'

export default function HomePage() {
  return (
    <>
      <div className="font-serif relative h-[calc(100vh-8vh)] w-screen flex justify-center items-end">
        <div className="container h-full p-10" >
          <p className="text-6xl text-green-900">Home</p>
          <hr />
          <div className="flex flex-wrap py-5 gap-11">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  )
}