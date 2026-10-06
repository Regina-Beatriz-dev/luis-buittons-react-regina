import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles/main.css'
import './styles/font.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/products.css'
import './styles/novidades.css'
import './styles/footer.css'
import './styles/checkout.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)