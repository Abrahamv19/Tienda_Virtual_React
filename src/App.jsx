import { useState } from 'react'
import './App.css'
import './Style/style.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'



/* Un componente es una funcion que empieza con mayuscula y retorna un jsx */
/* Las props son parametros o propiedades de un objeto o arreglo, props es un objeto con titulo y subtitulo*/
/* <Menu pagina1='' pagina2=''/> es un componenete equivalente a Menu(pagina1, pagina2...) */
/* Titulo es child component de App, las props es la manera como el componente App pasa parametros al componente child titulo */
/* Los compponenentes presentacionales solo muestran datos Ejm Titulo, Form, Section */
/* Los componentes contenedores encapsulan otros componentes y le pasan las propiedades, tambien modifican el estado (state components), tienen varias variables  Ejm App, en estos componentes estan las llamdas a las Apis*/
/* Children (es una prop predefinida en react), es una forma de crear props (parametros de un objeto) */


function App() {
 
return (

    <div>


       <Navbar />
         
      <ItemListContainer greeting={'Bienvenido a PS5 Zone'}/>


    
   </div>
)

}

export default App
