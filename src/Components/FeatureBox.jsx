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
<div className = "featureBox zoom">
                           <h3>
                              {this.props.icon === "faWhatsapp" ? <FontAwesomeIcon icon={faWhatsapp}/>: <p></p>}
                              {this.props.icon === "faBookOpen" ? <FontAwesomeIcon icon={faBookOpen}/>: <p></p>}
                              {this.props.icon === "faRunning" ? <FontAwesomeIcon icon={faRunning}/>: <p></p>}
                              {this.props.icon === "faCalendarCheck" ? <FontAwesomeIcon icon={faCalendarCheck}/>: <p></p>}
                              {this.props.icon === "faDumbbell" ? <FontAwesomeIcon icon={faDumbbell}/>: <p></p>}
                              {this.props.icon === "faPhoneAlt" ? <FontAwesomeIcon icon={faPhoneAlt}/>: <p></p>}
                           </h3>
                           <h4>{this.props.title}</h4>
                           <p>{this.props.text}</p>
                        </div>
)
}
}
export default FeatureBox