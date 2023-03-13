// import DummyImg from '../images/loginLogo.png'
import CreateImg from '../images/create.svg'
import ReactForm from '../components/Form'

export default function InputPage() {
  return (
    <>
      <div class="h-screen bg-stone-300 relative w-screen flex justify-center items-center bg-opacity-20">
        <div class="flex p-10 relative rounded-md shadow-md bg-stone-200">
          <button class="absolute top-0 right-0 m-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex flex-col gap-5 w-auto h-3/4 justify-center ">
            <div class="flex flex-col justify-start w-2/3 gap-2">
              <p class="text-stone-900 text-4xl text-start justify-self-start whitespace-nowrap ">Add New Product Form</p>
              <p class="text-start whitespace-nowrap">Please fill all the requirement below.</p>
            </div>
            <div class="flex w-full gap-5 mx-5">
              <ReactForm />
            </div>
          </div>
          <div>
            <div class="flex h-full w-full items-end px-5 mr-7">
              <img class="h-60" src={CreateImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
