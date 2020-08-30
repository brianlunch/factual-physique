import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

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
      <Navbar bg="" variant="" expand="xl"  sticky="top">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={
                activePage.endsWith('/#/') ? 'nav-link--active' : 'nav-link'
              }
            >
              Home
            </Nav.Link>


            
            <Nav.Link
              as={Link}
              to="/services"
              className={
                activePage.endsWith('/services') ? 'nav-link--active' : 'nav-link'
              }
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={
                activePage.endsWith('/about') ? 'nav-link--active' : 'nav-link'
              }
            >
              Services
            </Nav.Link>

            

            <Nav.Link
              as={Link}
              to="/contact"
              className={
                activePage.endsWith('/contact') ? 'nav-link--active' : 'nav-link'
              }
            >
              Contact 
            </Nav.Link>

            




            </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default NavbarLocal
