// libraries
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

// assets
import logo from '../../assets/images/Logo_transparent_white.png'


const Header = (props) => {
    return(
        <div className="Home parallax" id="home" >
            <div className="HomeContent">
               <div className="row no-gutters justify-content-end">
                  <div className="col-lg-6  col-md-8 col-sm-12 col-xs-12  text-center text-black">
                     <img src={logo} className="logo" alt="Logo for Factual Physique" />
                     <h1 className="header-text section-heading top-margin-pc">Factual Physique</h1>
                     <p className="header-text section-subheading">Online Fitness Coach</p>
                     <a target="_blank" rel="noopener noreferrer" className="socials" href="https://www.tiktok.com/@factualphysique?_d=secCgsIARCbDRgBIAIoARI%2BCjxiYePW243LDAb9iEjji1cNp2E%2FMIGqpR4XJuqI5MhcJUjyq%2B%2FpGNucgLNo7EqdMCCSuTVxPD2Q9QE8ZzoaAA%3D%3D&language=en&sec_uid=MS4wLjABAAAAaHIjVqqPnmxWQzHkYgLytbjdpCO-SOfkbZKykBmEWbYG_2ohzcVC2COqf5FcPv7X&share_author_id=6719360340524614661&tt_from=copy&u_code=d7e3c0a20k84ik&user_id=6719360340524614661&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m">
                        <FontAwesomeIcon className="zoom" icon={faTiktok} />
                     </a>
                     <a target="_blank" rel="noopener noreferrer" className="socials" href="https://www.instagram.com/factualphysique/">
                        <FontAwesomeIcon className="zoom" icon={faInstagram} />
                     </a>
                     <a target="_blank" rel="noopener noreferrer" className="socials" href="https://www.facebook.com/factualphysique-328939584467188/">
                        <FontAwesomeIcon className="zoom" icon={faFacebook} />
                     </a>
                  </div>
               </div>
            </div>
         </div>
    )
}

export default Header;