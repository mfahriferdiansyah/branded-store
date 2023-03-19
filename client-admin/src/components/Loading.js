import loading from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="h-full w-screen justify-center flex ">
      <img src={loading} alt="loading" className="w-20 h-20"/>
    </div>
  );
}