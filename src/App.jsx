import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import CarrinhoPage from './pages/CarrinhoPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/carrinho" element={<CarrinhoPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App