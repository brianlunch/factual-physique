import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faBookOpen, faRunning, faCalendarCheck, faUtensils, faPhoneAlt, faTrophy} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'
import FeatureBox from '../Components/FeatureBox';


class Application extends Component {
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

return (
    <div>
        <div className="row">
              <div className="col-12">
              <button type="button" onClick={()=>{this.handleModal()}} className="btn btn-outline-main formButton bigBtn">Click Here to Apply</button>
              </div>
        
        </div>
    
    <br/>
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
                            <option value="3 Months">3 Months</option>
                            <option value="6 Months">6 Months</option>
                            <option value="9 Months">9 Months</option>
                            <option value="12 Months">12 Months</option>
                            <option value="other">Other (Please Specify)</option>
                         </select>
                         <br/><br/>
                         <input className="form-control" type="text" name="other" onChange={this.handleChange} placeholder="Other"/>
                         <br/>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                         <label>How ready are you to make a change? Rating 1-10 (1 being not at all & 10 being 100% ready)   </label>
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
                   <option value="€50-100">€50-100</option>
                   <option value="€100-150">€100-150</option>
                   <option value="€150-200">€150-200</option>
                   <option value="€200+">€200+</option>
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
             {this.props.status === "ERROR" && 
             <p>Ooops! There was an error.</p>
             }
          </div>
       </form>
    </Modal.Body>
 </Modal>
 </div>
                  
)
}
}
export default Application