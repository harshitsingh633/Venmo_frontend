import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { PaymentFailed, PaymentSuccessful, SendMoney } from './pages/SendMoney'
import { LandingPage } from './pages/LandingPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Balance } from './components/Balance'
import { Card } from './components/Card'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ProtectedRoute><Card /></ProtectedRoute>} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path='/signin' element={<Signin/> }/>
        <Route path='/balance' element={<ProtectedRoute><Balance /></ProtectedRoute>} />
        <Route path='/send' element={<ProtectedRoute><SendMoney/></ProtectedRoute> }/>
        <Route path='/payment' element={<PaymentSuccessful />}/>
        <Route path='/paymentfailed' element={<PaymentFailed />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;