import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center p-2">
      <h1 className="sm:text-5xl text-5xl font-bold mt-2 ml-2 select-none text-[#BB8ED0]">Venmo</h1>
      <div className="flex ml-auto">
        <button className="font-semibold mt-5 mb-5 p-2 m-2 cursor-pointer">Home</button>
        <button className="font-semibold mt-5 mb-5 p-2 m-2 cursor-pointer">FAQ</button>
        <button className="font-semibold mt-5 mb-5 p-2 m-2 cursor-pointer">Sign In</button>
        <button onClick={() => {
            navigate('/signup')
        }} className="font-semibold rounded-4xl border-2 border-purple-400 m-5 p-2 hover:border-b-purple-900 ">SignUp</button>
        
      </div>
    </div>
  );
}
  