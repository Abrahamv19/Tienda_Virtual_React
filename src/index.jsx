import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './Style/style.css'

/* App() -> <App /> la llamada de la funcion App() escrito en jsx */

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    )
