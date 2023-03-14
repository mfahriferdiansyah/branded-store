import Table from '../components/Table'

export default function HomePage() {
  return (
    <>
      <div className="font-serif relative h-[calc(100vh-14vh)] w-screen flex justify-center items-end">
        <div className="container h-full p-10" >
          <p className="text-6xl text-green-900">Dashboard</p>
          <br />
          <Table />
        </div>
      </div>
    </>
  )
}