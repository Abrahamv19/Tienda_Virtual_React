import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../IMG/playstation.png';

import CartWidget from "./Cart/CartWidget";
import '../Navbar1/Navbar1.css'

const Navbar1 = () => {
  return (
    <Navbar className= "decoracion-texto" collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Link to='/'>
         <img src={logo} alt="" width={50}></img>
         </Link>
        </Navbar.Brand>
        <Navbar.Brand>
        <Link to='/'>PS5 ZONE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand>
            <Link to='/categoria/Accion'>Accion</Link>
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to='/categoria/Aventura'>Aventura</Link>
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to='/categoria/Deportes'>Deportes</Link>
            </Navbar.Brand>
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
