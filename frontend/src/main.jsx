// Importerer nødvendige moduler fra React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importerer routing-funksjon 
import { BrowserRouter } from 'react-router-dom'

// Importerer CSS og hovedkomponenten App
import './index.css'
import App from './App.jsx'

// Viser App-komponenten inne i <StrictMode> og <BrowserRouter>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
