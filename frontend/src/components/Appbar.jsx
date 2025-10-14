import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();

    return <div className="shadow h-14 flex justify-between mt-2">
        <div className="flex flex-col justify-center h-full ml-4">
            Venmo Payment App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center mr-3 text-xl ">
                <button
                onClick={() => {
                    navigate("/balance")
                }}
                 className="text-blue-600 hover:text-blue-800 cursor-pointer items-center rounded-4xl text-md border-black border p-2">Balance</button>
                        </div>
                        
            
                <div className="flex flex-col justify-center mr-3 text-xl">
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer rounded-4xl border-black border p-2"
                    >Logout</button>
                </div>
            </div>
        </div>
    
}
