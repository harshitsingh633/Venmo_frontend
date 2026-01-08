import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import PaymentSVG from "../assets/mobile-payment.svg"
import PaymentSecure from "../assets/Payment-Information-rafiki.svg"
import moneySVG from "../assets/money.svg"
import SurveySVG from "../assets/Survey.svg"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F9DFDF]">
        <NavBar />      
      <section className="flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tighter select-none">
            Fast, safe social payments <br />
            Online Payments
          </h1>

          <p className="mt-6 text-gray-500 text-lg md:text-xl select-none tracking-tight">
            Pay, get paid. Join the tens of millions of people on Venmo
          </p>
            <button className="font-semibold rounded-4xl text-white border bg-purple-400 m-5 p-2">Get Started</button>
          <button className="font-semibold rounded-4xl border-2 border-purple-400 m-5 p-2 hover:border-b-purple-900">Learn More</button>

        </div>

        <img src={PaymentSVG} alt="Payment" className="w-80" />
      </section>
     
     <div className="flex justify-center">
      <div className="grid grid-cols-3 w-3xl gap-5">
        <img src={PaymentSecure} alt="Secure" />
        <img src={moneySVG} alt="Money" />
        <img src={SurveySVG} alt="Survey" />
     </div>
     </div>

      <section className="px-6 md:px-20 py-16 select-none">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}
