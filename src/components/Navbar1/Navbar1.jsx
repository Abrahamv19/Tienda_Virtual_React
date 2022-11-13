import { Link } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaPlaystation } from "react-icons/fa";
import CartWidget from "./Cart/CartWidget";
import '../Navbar1/Navbar1.css'

const Navbar1 = () => {
  return (
    <Navbar className= "decoracion-texto" collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <FaPlaystation size={42} />
        </Navbar.Brand>
        <Navbar.Brand>
        <Link to='/'>PS5 Zone</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav>
            <Link to='/categoria/Accion'>Accion</Link>
            </Nav>
            <Nav>
            <Link to='/categoria/Aventura'>Aventura</Link>
            </Nav>
            <Nav>
            <Link to='/categoria/Deportes'>Deportes</Link>
            </Nav>
          </Nav>
          <Nav>
         
           <Link to='/carrito'>
              <CartWidget />
           </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
