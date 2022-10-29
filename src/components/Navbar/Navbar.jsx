import '../../Style/style.css'
import CartWidget from "./CartWidget"


const Navbar = () => {
  return (

   <nav className="nav">
    <a href="/" className="titulo-pagina">Ps5 Zone</a>
    <ul>
      <li>
        <a href="./productos" className='texto-categorias'>Productos</a>
      </li> 

      <li>
        <a href="./nosotros" className='texto-categorias'>Nosotros</a>
      </li>
    </ul>
    <div>
      <CartWidget />
    </div>

   </nav>

  )
}

export default Navbar