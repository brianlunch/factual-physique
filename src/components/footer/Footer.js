import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import {  faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {Link, animateScroll as scroll} from 'react-scroll'

//assets
import logo from '../../assets/images/Logo_words_w.png'


const Footer = () => {

   return (
      <div className="Footer text-white" id="contact">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-3 col-md-4 col-sm-6 col-12 footerContact">
                  <br/>
                  <div className="row">
                     <div className="col-2">
                        <p className="footerText">
                           <FontAwesomeIcon icon={faUser} />
                        </p>
                     </div>
                     <div className="col-10">
                        <p className="footerText">Adam Carroll</p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-2">
                        <p className="footerText">
                           <FontAwesomeIcon icon={faEnvelope} />
                        </p>
                     </div>
                     <div className="col-10">
                     <a className="footerText emailAd" href="mailto:adam@factualphysique.com">adam@factualphysique.com</a>  
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-2">
                        <p className="footerText">
                           <FontAwesomeIcon icon={faPhoneAlt} />
                        </p>
                     </div>
                     <div className="col-10">
                        <p className="footerText">+353 851233923</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-4 col-sm-6 col-12 text-center">
               <img src={logo} className="logo text-center" alt="Logo" />
                  <br/><br/>
                  <a target="_blank" rel="noopener noreferrer" className="socials text-white" href="https://www.tiktok.com/@factualphysique?_d=secCgsIARCbDRgBIAIoARI%2BCjxiYePW243LDAb9iEjji1cNp2E%2FMIGqpR4XJuqI5MhcJUjyq%2B%2FpGNucgLNo7EqdMCCSuTVxPD2Q9QE8ZzoaAA%3D%3D&language=en&sec_uid=MS4wLjABAAAAaHIjVqqPnmxWQzHkYgLytbjdpCO-SOfkbZKykBmEWbYG_2ohzcVC2COqf5FcPv7X&share_author_id=6719360340524614661&tt_from=copy&u_code=d7e3c0a20k84ik&user_id=6719360340524614661&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m">
                     <FontAwesomeIcon className="zoom" icon={faTiktok} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" className="socials text-white" href="https://www.instagram.com/factualphysique/">
                     <FontAwesomeIcon className="zoom" icon={faInstagram} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" className="socials text-white" href="https://www.facebook.com/factualphysique-328939584467188/">
                     <FontAwesomeIcon className="zoom" icon={faFacebook} />
                  </a>
                  <br/><br/>
                  <p className="mt-auto">© 2020 Copyright: Adam Carroll</p>
               </div>
               <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-right nav-footer">
                  <p className="footerText">Navigation</p>
                  <Link
                     className="nav-link-footer"
                     activeClass="active"
                     to="home"
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration= {500}
                     >
                  Home</Link>
                  <br/>
                  <Link className="nav-link-footer"
                     activeClass="active"
                     to="services"
                     spy={true}
                     smooth={true}
                     offset={-40}
                     duration= {500}
                     >
                  Coaching</Link>
                  <br/>
                  <Link className="nav-link-footer"
                     activeClass="active"
                     to="about"
                     spy={true}
                     smooth={true}
                     offset={-40}
                     duration= {500}
                     >
                  My Goal</Link>
                  <br/>
                  
               </div>
            </div>
         </div>
      </div>
   )
} 
export default Footer