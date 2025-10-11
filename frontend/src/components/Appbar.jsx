import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();



    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            
                <div className="flex flex-col justify-center mr-3 text-xl">
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    >Logout</button>
                </div>
            </div>
        </div>
    
}