import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/input.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Aquí va tu lógica habitual de JavaScript/TypeScript Vanilla
console.log("Proyecto LPM cargado con éxito");
