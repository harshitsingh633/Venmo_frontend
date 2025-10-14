import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { PaymentFailed, PaymentSuccessfull, SendMoney } from './pages/SendMoney'
import { LandingPage } from './pages/LandingPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Balance } from './components/Balance'
function App() {  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path='/signin' element={<Signin/> }/>
        <Route path='/balance' element={<Balance />} />
        <Route path='/send' element={<SendMoney/> }/>
        <Route path='/payment' element={<PaymentSuccessfull />}/>
        <Route path='/paymentfailed' element={<PaymentFailed />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

//44.05 bulk user is only available for the user who is signed in so correct it only gated to people who are actually logged in