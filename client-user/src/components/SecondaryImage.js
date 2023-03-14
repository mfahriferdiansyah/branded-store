export default function SecondaryImage({data}) {
  return (
    <>
      <div>
        <img
          className="h-28 shadow-md cursor-pointer hover:opacity-90 hover:scale-110"
          src={data.imgUrl}
          alt=""
        />
      </div>
    </>
  )
}