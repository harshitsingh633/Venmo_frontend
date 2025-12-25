import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();

    return <div className="shadow h-14 flex justify-between mt-2">
        <div className="flex flex-col justify-center h-full ml-4">
            Venmo Payment App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center mr-3 ">
                <button
                onClick={() => {
                    navigate("/balance")
                }}
                 className="text-gray-800 hover:text-gray-500 cursor-pointer items-center rounded-4xl text-lg border-blue-600 border p-1">Balance</button>
                        </div>
                        
            
                <div className="flex flex-col justify-center mr-3 ">
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                    className="text-gray-800 hover:text-gray-500 cursor-pointer rounded-4xl border-blue-600 border text-lg p-1"
                    >Logout</button>
                </div>
            </div>
        </div>
    
}
