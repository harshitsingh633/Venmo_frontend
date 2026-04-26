import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import PaymentSVG from "../assets/mobile-payment.svg";
import PaymentSecure from "../assets/Payment-Information-rafiki.svg";
import moneySVG from "../assets/money.svg";
import SurveySVG from "../assets/Survey.svg";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F9DFDF]">
        <NavBar />
      <section className="md:flex sm:items-center md:justify-between md:ml-20 md:mr-20 px-6 py-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tighter select-none">
            Fast, safe social payments <br />
            Online Payments
          </h1>
          <p className="mt-6 text-gray-500 text-lg md:text-xl select-none tracking-tight">
            Pay, get paid. Join the tens of millions of people on Venmo
          </p>
            <button className="font-semibold rounded-4xl text-white border bg-purple-400 p-2 "
              onClick={() => {
        navigate("/signin")
              }}>Get Started</button>
          <button className="font-semibold rounded-4xl border-2 border-purple-400 m-5 p-2 hover:border-b-purple-900">Learn More</button>

        </div>

        <img src={PaymentSVG} alt="Payment" className="w-80" />
      </section>
     
     <motion.div className="flex justify-center">
      <div className="md:grid md:grid-cols-3 grid grid-row w-4xl gap-10">
        <img src={PaymentSecure} alt="Secure" />
       
        <img src={moneySVG} alt="Money" />
       
        <img src={SurveySVG} alt="Survey" />
     </div>
     </motion.div>
    
      <section className="px-6 md:px-20 py-16 select-none">
        <FAQ />
      </section>
      <div className="flex flex-col justify-center items-center">
      <span className="font-semibold text-3xl items-center justify-center">Ready to get Started?</span>
      <p className="leading-tight p-5">Sign up now and start sending money with ease!</p>
      <button className="font-semibold rounded-xl border-2 border-purple-400  p-2 hover:border-b-purple-900" onClick={() => {
        navigate("/signin")
      }}>Join Now</button>
    </div>
      <Footer />
    </div>
  );
}
