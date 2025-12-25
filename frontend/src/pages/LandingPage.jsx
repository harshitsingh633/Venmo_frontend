import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function LandingPage(){
    return <div className="bg-slate-100 h-screen w-screen overflow-auto bg-linear-to-b to-[#F9DFDF]">
        <NavBar />
        <section className="flex justify-center">
            <div className="text-center px-8 py-24">
            <p className="text-4xl md:text-6xl text-shadow-md font-semibold text-slate-800 mb-3 select-none">Fast, safe social Payments <br />
                Online Payments
            </p>
            <p className="text-gray-500 text-shadow-sm text-md select-none">Pay, get paid. Join the tens of millions of people on Venmo</p>
            </div>
        </section>
        <div className="pt-24">
            <Footer />
        </div>
    </div>
}