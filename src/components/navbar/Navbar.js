import React, {useEffect, useState}  from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

//assets
import logo from '../../assets/images/Logo_transparent.png';

//styles
import './Navbar.css';

//hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';


//Creates the Navbar shown on all pages
const NavbarLocal = (props) => {
   const { height, width } = useWindowDimensions();
   const [navClass, setNavClass] = useState('container');

   useEffect(() => {
      if(width < 1000){
         setNavClass('')
      }
    }, [width])

   return (
      <Navbar bg="light" variant="light"  sticky="top">
            <Navbar.Brand href="#home"><img className="nav-logo" src={logo} alt="factual physique logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  <Link
                     className="nav-link"
                     activeClass="active"
                     to="home"
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration= {500}
                     >
                     Home
                  </Link>
                  <Link className="nav-link"
                     activeClass="active"
                     to="services"
                     spy={true}
                     smooth={true}
                     offset={-50}
                     duration= {500}
                     >
                     Coaching
                  </Link>
                  <Link
                     className="nav-link"
                     activeClass="active"
                     to="contact"
                     spy={true}
                     smooth={true}
                     offset={0}
                     duration= {500}
                     >
                     Contact
                  </Link>
               </Nav>
            </Navbar.Collapse>
      </Navbar>
   )
}
export default NavbarLocal