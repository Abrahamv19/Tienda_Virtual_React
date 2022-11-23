import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestore } from './firebase/config'
//import './Style/style.css'

/* App() -> <App /> la llamada de la funcion App() escrito en jsx */
initFirestore()
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    )
