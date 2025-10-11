import { NavBar } from "../components/NavBar";

export function LandingPage(){
    return <div className="bg-slate-100 h-screen w-screen">
        <NavBar />
        <h2 className="text-6xl mt-48 ml-42">Fast, safe social payments</h2>
        <p className="mt-5 ml-42 text-lg">Pay,get paid.Join the tens of millions of people on Venmo</p>
        
    </div>
}