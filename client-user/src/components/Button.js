export default function Button({text}) {
  return (
    <>
      <button type="submit" class="py-1 mt-3 w-full rounded-md text-lg hover:bg-green-800 bg-green-900 text-white">{text}</button>
    </>
  )
}