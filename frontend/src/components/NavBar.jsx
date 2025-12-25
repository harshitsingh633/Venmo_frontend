import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center p-2">
      <h1 className="sm:text-5xl text-5xl font-bold mt-2 ml-2 text-[#BB8ED0]">Venmo</h1>
      <div className="flex ml-auto ">
        <button onClick={() => {
            navigate('/signup')
        }} className="font-semibold rounded-4xl border m-5 p-2 ">Login</button>
        
      </div>
    </div>
  );
}
  