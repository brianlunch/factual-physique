import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faBookOpen, faRunning, faCalendarCheck, faUtensils, faPhoneAlt, faTrophy} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'
import FeatureBox from '../Components/FeatureBox';
/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class Services1 extends Component {
constructor(props) {
super(props);
this.state = {
name: '',
email: '',
message: '',
phone: '',
age: '',
duration: '',
readiness: '',
price: '',
goal:'',
struggle: '',
start:'',
contactBy:'',
found:'',
disabled: false,
emailSent: null,
status: "",
history: this.props.history,
show:false
}
}
handleModal(){
this.setState({show:true})
}
handleClose(){
this.setState({show:false})
}
handleChange = (event) => {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;
this.setState({
[name]: value
})
console.log(this.state);
}
handleSubmit = (event) => {
event.preventDefault();
console.log(event.target);
this.setState({
disabled: true
});
Axios.post('http://localhost:3030/api/email', this.state)
.then(res => {
if(res.data.success) {
this.setState({
disabled: false,
emailSent: true
});
} else {
this.setState({
disabled: false,
emailSent: false
});
}
})
.catch(err => {
console.log(err);
this.setState({
disabled: false,
emailSent: false
});
})
}
render() {
const { status } = this.state;
return (
<div className="Services" id="services">
   <div className="row">
      <div className="col-12 text-center">
         <h1 className="display-4 text-center">Online Coaching Plan</h1>
         <br/>
         <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
               <p className="text-center planText">My online coaching isn’t for people who are looking for a quick fix, however it is for people 
                  who want to get in the best shape of their life and are ready to change their lifestyle for the better.
                  <br/><br/>
                  You choose the duration, price and goals to suit your own needs and ensure you get exactly what you want from it. Clients are 100% guaranteed to acheive their set goals.
               </p>
               <br/>
            </div>
            <div className="row justify-content-center bg-black ">
               <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                  <h2 className="display-4 featuresTitle">Features of the Plan</h2>
                  <br/> 
                  <div className="row justify-content-between">
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                     <FeatureBox icon="faDumbbell" title="Custom Workout Programs" text="This will be a fully customised workout plan created to suit your needs and goals. You will receive an updated one on monthly."></FeatureBox>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                     <FeatureBox icon="faBookOpen" title="Custom Nutrition e-book" text="This will contain a number of Nutritional recipes and tips to keep you on track. Each e-book is tailor made for your needs."></FeatureBox>
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
                     <FeatureBox icon="faPhoneAlt" title="Monthly Emergency Call" text="Urgently need to talk to me about something hindering your plan, call me to get a speedy response"></FeatureBox>
                     </div>
                  </div>
                  <br/>
               </div>
               <button type="button" onClick={()=>{this.handleModal()}} className="btn btn-outline-main formButton bigBtn">Click Here to Apply</button>
               <br/>
            </div>
            <Modal show={this.state.show} onHide={()=>
               {this.handleClose()}} backdrop="static"
               keyboard={false} size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               className="aboutText"
               centered>
               <Modal.Header closeButton>
                  <Modal.Title>Online Coaching Plan Application</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <form
                     onSubmit={this.handleSubmit}
                     >
                     <div className="text-center">
                        {this.state.emailSent === true ? 
                        <h5>Thank you for Contacting us!</h5>
                        : 
                        <div className="text-left">
                           <p className="">I will use this form to try understand your goals, requirements and eligilibity for my Online Plan. I respond to all applicants.</p>
                           <br/>
                           <div className="form-group">
                              <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>What is your full name?</label>
                                    <input className="form-control" type="text" name="name" onChange={this.handleChange} required/>
                                    <br/>
                                    <label>What’s your email address?</label>
                                    <input className="form-control" type="email" name="email" onChange={this.handleChange} required />
                                 </div>
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>What is your mobile number? (Please include country code)</label>
                                    <input className="form-control" type="tel" placeholder="+353 87 XXXXXXX" name="phone" onChange={this.handleChange} required/>
                                    <br/>
                                    <label>Age</label>
                                    <input className="form-control" type="number" name="age" onChange={this.handleChange} required ></input>
                                 </div>
                              </div>
                           </div>
                           <div className="form-group">
                              <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>How long are you looking to work with me for?</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="duration" onChange={this.handleChange}>
                                       <option selected>Choose...</option>
                                       <option value="3">3 Months</option>
                                       <option value="6">6 Months</option>
                                       <option value="9">9 Months</option>
                                       <option value="12">12 Months</option>
                                       <option value="0">Other (Please Specify)</option>
                                    </select>
                                    <br/><br/>
                                    <input className="form-control" type="text" name="other" onChange={this.handleChange} placeholder="Other"/>
                                    <br/>
                                 </div>
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>How ready are you to make a change?   </label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="readiness" onChange={this.handleChange}>
                                       <option selected>Choose...</option>
                                       <option value="1">1</option>
                                       <option value="2">2</option>
                                       <option value="3">3</option>
                                       <option value="4">4</option>
                                       <option value="5">5</option>
                                       <option value="6">6</option>
                                       <option value="7">7</option>
                                       <option value="8">8</option>
                                       <option value="9">9</option>
                                       <option value="10">10</option>
                                    </select>
                                    <br/>
                                 </div>
                              </div>
                           </div>
                           <label>Knowing that your level of investment will effect the level of coaching I provide, how much are you willing to invest if we could 100% guarantee you will achieve your goals? </label>
                           <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="price" onChange={this.handleChange}>
                              <option selected>Choose...</option>
                              <option value="50">€50-100</option>
                              <option value="100">€100-150</option>
                              <option value="150">€150-200</option>
                              <option value="200">€200+</option>
                           </select>
                           <br/><br/>
                           <label>What is your current fitness goal?</label>
                           <textarea className="form-control" type="text" name="goal" onChange={this.handleChange} required/>
                           <br/>
                           <label>What is your biggest struggle?</label>
                           <textarea className="form-control" type="text" name="struggle" onChange={this.handleChange} required/>
                           <br/>
                           <div className="form-group">
                              <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>If offered a place to work with me now, when would you be willing to start?</label>
                                    <input className="form-control" type="text" name="start" onChange={this.handleChange} required/>
                                    <br/>
                                 </div>
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>How would you like me to contact you? Call or Message</label>
                                    <input className="form-control" type="text" onChange={this.handleChange} name="contactBy" required />
                                    <br/>
                                 </div>
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label>How did you find me? (Insta, TikTok, Facebook, etc..)</label>
                                    <input className="form-control" type="text" name="found" onChange={this.handleChange} required />
                                 </div>
                              </div>
                           </div>
                           <div className="text-center">
                              <button className="btn btn-outline-dark formButton1">Submit</button>
                           </div>
                        </div>
                        }
                        {status === "ERROR" && 
                        <p>Ooops! There was an error.</p>
                        }
                     </div>
                  </form>
               </Modal.Body>
            </Modal>
         </div>
      </div>
   </div>
</div>
)
}
}
export default Services1