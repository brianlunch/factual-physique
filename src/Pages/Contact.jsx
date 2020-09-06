import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';


class Contact extends React.Component {
constructor(props) {
super(props);
this.state = {
name: '',
email: '',
message: '',
disabled: false,
emailSent: null,
}
}
handleChange = (event) => {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;
this.setState({
[name]: value
})
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
return(
<div className="Contact bg-white" id="contact">
   <h1 className="display-4 text-center">Contact Me</h1>
   <br/>
   <div className="row justify-content-center">
      <div className="col-12 col-sm-12 col-md-10 col-lg-8 text-left">
         <Form onSubmit={this.handleSubmit}>
            <Form.Group>
               <Form.Label htmlFor="full-name">Full Name</Form.Label>
               <Form.Control id="full-name" name="name" type="text" required value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
               <Form.Label htmlFor="email">Email</Form.Label>
               <Form.Control id="email" name="email" type="email" required value={this.state.email} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
               <Form.Label htmlFor="message">Message</Form.Label>
               <Form.Control id="message" name="message" as="textarea"rows="3" required value={this.state.message} onChange={this.handleChange} />
            </Form.Group>
            <br/>
            <div className="text-center">
               <Button className="btn-outline-dark formButton1" type="submit" disabled={this.state.disabled}>
               Send
               </Button>
            </div>
            {this.state.emailSent === true && 
            <p className="d-inline success-msg">Email Sent</p>
            }
            {this.state.emailSent === false && 
            <p className="d-inline err-msg">Email Not Sent</p>
            }
         </Form>
      </div>
   </div>
</div>
);
}
}
export default Contact;