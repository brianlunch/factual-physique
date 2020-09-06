import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import logo from '../Logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'
import About from './About.jsx'
import Services1 from './Services1.jsx'
import Contact from './Contact.jsx'
import Footer from './footer'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class Home extends Component {
constructor(props) {
super(props)
this.state = {
history: this.props.history
}
}
render() {
return (
<div>
   <Navbar></Navbar>
   <div className="Home" id="home" >
      <div className="HomeContent">
         <div className="row no-gutters justify-content-end">
            <div className="col-lg-6  col-md-8 col-sm-12 col-xs-12  text-center text-black">
               <img src={logo} className="logo" alt="Logo" />
               <h1 className="display-4">Factual Physique</h1>
               <p className="hpText">Online Fitness Coach</p>
               <a target="_blank"  className="socials " href="https://www.tiktok.com/@factualphysique?_d=secCgsIARCbDRgBIAIoARI%2BCjxiYePW243LDAb9iEjji1cNp2E%2FMIGqpR4XJuqI5MhcJUjyq%2B%2FpGNucgLNo7EqdMCCSuTVxPD2Q9QE8ZzoaAA%3D%3D&language=en&sec_uid=MS4wLjABAAAAaHIjVqqPnmxWQzHkYgLytbjdpCO-SOfkbZKykBmEWbYG_2ohzcVC2COqf5FcPv7X&share_author_id=6719360340524614661&tt_from=copy&u_code=d7e3c0a20k84ik&user_id=6719360340524614661&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m">
                  <FontAwesomeIcon className="zoom" icon={faTiktok} />
               </a>
               <a target="_blank" className="socials ig" href="https://www.instagram.com/factualphysique/">
                  <FontAwesomeIcon className="zoom" icon={faInstagram} />
               </a>
               <a target="_blank" className="socials " href="https://www.facebook.com/factualphysique-328939584467188/">
                  <FontAwesomeIcon className="zoom" icon={faFacebook} />
               </a>
            </div>
         </div>
      </div>
   </div>
   <Services1></Services1>
   <About></About>
   <Contact></Contact>
   <Footer></Footer>
</div>
)
}
}
export default Home