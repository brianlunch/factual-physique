import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import homeImage from '../HomePageImageCut.jpg'
import logo from '../Logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */


const styles = {
  paperContainer: {
      backgroundImage: `url(${homeImage})`,
      height:`100%`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      width:`auto`
  }
};

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      history: this.props.history
    }
  }

  

  render() {


    

    return (

      <div className="Home" style={ styles.paperContainer}>
          <Navbar></Navbar>

        <div className="HomeContent">
        
         <div className="row justify-content-end ">
           
             <div className="col-lg-6  col-md-8 col-xs-10  text-center text-black">
             <img src={logo} alt="Logo" />
                <h1 className="display-4">Factual Physique</h1>
                <p className="hpText">Dublin based Personal Trainer</p>
                <br/>

                  <div className="row justify-content-center">
                    <div className="col-lg-1 col-md-2 col-xs-3 zoom">

                    <a target="_blank" href="https://www.instagram.com/factualphysique/">
                    <h2><FontAwesomeIcon icon={faInstagram} /></h2>
                    </a>

                    </div>
                      <div className="col-lg-1 col-md-2 col-xs-3 zoom">
                      <a target="_blank" href="https://www.tiktok.com/@factualphysique?_d=secCgsIARCbDRgBIAIoARI%2BCjxiYePW243LDAb9iEjji1cNp2E%2FMIGqpR4XJuqI5MhcJUjyq%2B%2FpGNucgLNo7EqdMCCSuTVxPD2Q9QE8ZzoaAA%3D%3D&language=en&sec_uid=MS4wLjABAAAAaHIjVqqPnmxWQzHkYgLytbjdpCO-SOfkbZKykBmEWbYG_2ohzcVC2COqf5FcPv7X&share_author_id=6719360340524614661&tt_from=copy&u_code=d7e3c0a20k84ik&user_id=6719360340524614661&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m">
                      <h2><FontAwesomeIcon icon={faTiktok} /></h2>
                      </a>
                      </div>
                        <div className="col-lg-1 col-md-2 col-xs-3 zoom">
                        <a target="_blank" href="https://www.facebook.com/factualphysique-328939584467188/">
                        <h2><FontAwesomeIcon icon={faFacebook} /></h2>
                        </a>
                        </div>
                  
               
                      
                  
                  </div>
                 


             </div>
         </div>

        </div>

        
       </div>
        
      
    )
  }
}

export default Home