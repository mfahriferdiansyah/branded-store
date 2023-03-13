import loginLogo from '../images/loginLogo.png'

export default function LoginPage() {
  return (
    <>
      <div class="h-screen bg-stone-200 relative w-screen flex justify-center items-center">
        <div class=" bg-zinc-100 py-5 shadow-2xl rounded-lg flex">
          <div class=" w-full justify-center items-center flex flex-col gap-5 py-10 ">
            <div class="flex flex-col justify-start w-2/3 gap-2">
            <p class="text-stone-900 text-4xl text-start justify-self-start">Login</p>
            <p class="text-start">Welcome, please login first.</p>
            </div>
            <form action="" class="flex flex-col gap-5 w-2/3">
              <div class="justify-center flex flex-col gap-3">
              <input type="text" name="loginEmail" class="px-3 py-2 shadow-md rounded-md" placeholder="Email" />
              <input type="text" name="loginPassword" class="px-3 py-2 shadow-md rounded-md" placeholder="Password" />
              <button type="submit" class="py-1 mt-3 w-full rounded-3xl text-lg hover:bg-green-800 bg-green-900 text-white">Login</button>
              </div>
            </form>
          </div>
          <div class="flex h-full w-full p-5 mr-7">
            <img src={loginLogo} alt="" class="shadow-xl rounded-md bg-stone-400"  />
          </div>
        </div>
      </div>
    </>
  );
}
