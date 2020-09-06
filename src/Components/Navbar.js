import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, animateScroll as scroll} from 'react-scroll'
//Creates the Navbar shown on all pages
class NavbarLocal extends Component {
constructor(props) {
super(props)
this.state = { history: this.props.history }
}
render() {
// var isActive = this.context.router.route.location.pathname
let activePage = window.location.href
return (
<Navbar bg="light" variant="light"  sticky="top">
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
         Home</Link>
         <Link className="nav-link"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-40}
            duration= {500}
            >
         Coaching</Link>
         <Link className="nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-40}
            duration= {500}
            >
         My Goal</Link>
         <Link
            className="nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration= {500}
            >
         Contact</Link>
      </Nav>
   </Navbar.Collapse>
</Navbar>
)
}
}
export default NavbarLocal