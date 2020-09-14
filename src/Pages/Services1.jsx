import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faBookOpen, faRunning, faCalendarCheck, faUtensils, faPhoneAlt, faTrophy} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'
import FeatureBox from '../Components/FeatureBox';
import Application from '../Components/Application'
/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class Services1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        history: this.props.history
        }
        }
render() {

return (
<div className="Services" id="services">
   <div className="row">
      <div className="col-12 text-center">
         <h1 className="display-4 text-center">Online Coaching</h1>
         <br/>
         <div className="row justify-content-center">
             <div className="row justify-content-center gradient1">
             <div className="col-lg-10 col-md-12 col-sm-12 col-12 ">
               <p className="text-center planText">My online coaching isn’t for people who are looking for a quick fix, however it is for people 
                  who want to get in the best shape of their life and are ready to change their lifestyle for the better.
                  <br/><br/>
                  As a coach I’ll work closely with you to ensure you reach your goals in a way that suits your lifestyle. Clients are guaranteed to acheive their set goals.
               </p>
               <br/><br/><br/>
            </div>
             </div>
           
            <div className="row justify-content-center bg-black gradient2">
               <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                  <h2 className="display-4 featuresTitle">Features</h2>
                  <br/> 
                  <div className="row justify-content-between">
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                     <FeatureBox icon="faDumbbell" title="Custom Workout Programs" text="This will be a fully customised workout plan created to suit your needs and goals. Programs will be updated as needed."></FeatureBox>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                     <FeatureBox icon="faBookOpen" title="Custom Nutrition e-book" text="This ebook is customized to your goal. It teaches you how you can eat the foods you love while reaching your goals. Meal plans are also available to upon request"></FeatureBox>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                     <FeatureBox icon="faRunning" title="Training & Nutrition Tracker" text="This will ensure your daily goals are met both physically and nutritionally. It also proves to be a great motivator."></FeatureBox>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <FeatureBox icon="faWhatsapp" title="24/7 Whatsapp Support" text="I will personally be available to answer any questions you may have at all times to ensure you are never alone on this journey."></FeatureBox>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                     <FeatureBox icon="faCalendarCheck" title="Weekly Check-in" text="At the end of every week I will check in with you to ensure we are on track and make any necessary changes to the plan."></FeatureBox>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                     <FeatureBox icon="faPhoneAlt" title="Monthly Emergency Call" text="Urgently need to talk to me about something hindering your plan? Call me to get a speedy response"></FeatureBox>
                     </div>
                  </div>
                  <br/>
               </div>
               <Application></Application>
            </div>

         </div>
      </div>
   </div>
</div>
)
}
}
export default Services1