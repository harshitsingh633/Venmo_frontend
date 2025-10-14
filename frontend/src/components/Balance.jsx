import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token"); // JWT token
      const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Assuming backend returns { balance: 2000 }
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
        <div className="animate-pulse text-xl font-semibold text-gray-600">
          Fetching your balance...
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
      <div className="bg-blue-300 p-6 rounded-2xl shadow-lg text-center">
        <div className="font-bold text-lg text-gray-900">Your Balance</div>
        <div className="font-semibold mt-2 text-2xl text-gray-100">₹ {balance}</div>
      </div>
    </div>
  );
};
