import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Heading } from "../components/Heading";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleTranfer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        { to: id, amount },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.data.success) {
        navigate("/payment");
      } else {
        navigate("/payment-failed");
      }
    } catch (error) {
      console.error(err);
      setError(err.response?.data?.message || "An unexpected error occured");
    }
  };

  return (
    <div class="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div class="flex flex-col space-y-1.5 p-6">
            <h2 class="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div class="p-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span class="text-2xl text-white">{name?.[0]?.toUpperCase()}</span>
              </div>
              <h3 class="text-2xl font-semibold">{name}</h3>
            </div>
            <div class="space-y-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button
                onClick={handleTranfer}
                class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function PaymentSuccessfull() {
  const location = useLocation();
  const { to, amount, message } = location.state || {};

  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <Heading label={"Payment Successful"} />
        <p className="pt-4 text-lg text-gray-700">
          {message || "The payment was successfully transferred!"}
        </p>
        {to && (
          <p className="mt-2 text-gray-600">
            ₹{amount} has been sent to <span className="font-semibold">{to}</span>.
          </p>
        )}
      </div>
    </div>
  );
}


export function PaymentFailed() {
  const location = useLocation();
  const error = location.state?.error || "Payment failed due to an unknown error.";

  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h2>
        <p className="text-gray-700">{error}</p>
      </div>
    </div>
  );
}
