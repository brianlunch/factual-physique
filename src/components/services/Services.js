import React from 'react'

// components
import FeatureBox from '../featured-box/FeatureBox';
import Application from '../application/Application';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faBookOpen, faRunning, faCalendarCheck, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Services = (props) => {

   return (
      <div className="Services section" id="services">
         <div className="container">
            <h1 className="section-heading text-center bottom-margin service-heading">Online Coaching</h1>
            <div className="bottom-margin">
               <p className="text-center planText">
                  My online coaching isn’t for people who are looking for a quick fix. 
               </p>
               <p className="text-center planText">However it is for people who want to get in the <b>best shape of their life</b> and are 
                  ready to <b>change their lifestyle for the better</b>.
               </p>
               <p className="text-center planText">
                  As a coach I’ll work closely with you to ensure you <b>achieve your goals</b> in a <b>way that suits your lifestyle.</b> 
               </p>
            </div>
         </div>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <FeatureBox 
                     icon={<FontAwesomeIcon icon={faDumbbell}/>} 
                     title="Custom Workout Programs" 
                     text="This will be a fully customised workout plan created to suit your needs and goals. Programs will be updated as needed."></FeatureBox>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <FeatureBox 
                     icon={<FontAwesomeIcon icon={faBookOpen}/>} 
                     title="Custom Nutrition e-book" 
                     text="This ebook is customized to your goal. It teaches you how you can eat the foods you love while reaching your goals. Meal plans are also available to upon request"/
                  >
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <FeatureBox 
                     icon={<FontAwesomeIcon icon={faRunning}/>} 
                     title="Training & Nutrition Tracker" 
                     text="This will ensure your daily goals are met both physically and nutritionally. It also proves to be a great motivator."/
                  >
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <FeatureBox 
                     icon={<FontAwesomeIcon icon={faWhatsapp}/>} 
                     title="24/7 Whatsapp Support" 
                     text="I will personally be available to answer any questions you may have at all times to ensure you are never alone on this journey."
                  />
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <FeatureBox 
                     icon={<FontAwesomeIcon icon={faCalendarCheck}/>} 
                     title="Weekly Check-in" 
                     text="At the end of every week I will check in with you to ensure we are on track and make any necessary changes to the plan."></FeatureBox>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <FeatureBox 
                     icon={<FontAwesomeIcon icon={faPhoneAlt}/>}
                     title="Monthly Emergency Call" 
                     text="Urgently need to talk to me about something hindering your plan? Call me to get a speedy response"></FeatureBox>
               </div>
            </div>
         </div>
         <Application/>
      </div>
   )
}
export default Services;