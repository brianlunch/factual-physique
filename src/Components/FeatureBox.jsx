import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faBookOpen, faRunning, faCalendarCheck, faUtensils, faPhoneAlt, faTrophy} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
//Creates the Navbar shown on all pages
class FeatureBox extends Component {
constructor(props) {
super(props)
this.state = { history: this.props.history }
}

render() {

return (
    
<div className = "featureBox">
                           
                              {this.props.icon === "faWhatsapp" ? <h3><FontAwesomeIcon icon={faWhatsapp}/></h3>: null}
                              {this.props.icon === "faBookOpen" ? <h3><FontAwesomeIcon icon={faBookOpen}/></h3>: null}
                              {this.props.icon === "faRunning" ? <h3><FontAwesomeIcon icon={faRunning}/></h3>: null}
                              {this.props.icon === "faCalendarCheck" ? <h3><FontAwesomeIcon icon={faCalendarCheck}/></h3>: null}
                              {this.props.icon === "faDumbbell" ? <h3><FontAwesomeIcon icon={faDumbbell}/></h3>:null}
                              {this.props.icon === "faPhoneAlt" ? <h3><FontAwesomeIcon icon={faPhoneAlt}/></h3>:null}
                           
                           <h4>{this.props.title}</h4>
                           <p>{this.props.text}</p>
                        </div>
                  
)
}
}
export default FeatureBox