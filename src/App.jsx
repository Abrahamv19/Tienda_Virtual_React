
//import './App.css'
//import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar1/Navbar1'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemListGreeting from './components/ItemListContainer/ItemListGreeting/ItemListGreeting'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Carrito from './pages/Carrito/Carrito'



function App() {
return (
    <div>
       <Navbar1 />  
      <ItemListGreeting greeting={'Bienvenido a PS5 Zone'} />
     
      <Routes>
         <Route path='/' element={<ItemListContainer/>} />
         <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        
         <Route path='/detail/:productId' element={<ItemDetailContainer />} />
         <Route path='/carrito' element={<Carrito />} />
         <Route path='*' element={<Navigate to= '/' />} />
      </Routes>
     
    </div>
)
}
export default App
