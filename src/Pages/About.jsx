import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class About extends Component {
constructor(props) {
super(props)
this.state = {
history: this.props.history
}
}
render() {
return (
<div className="Aboutt" id="about">
   <div className="row  justify-content-center ">
      <div className="col-lg-8 col-md-8 col-xs-12 text-center ">
         <h1 className="display-3 text-center">My Goal</h1>
         <br/><br/>
         <blockquote className=" text-center">
            <p className="text-left servicesText">
               Ever since I got into health and fitness, I’ve always loved helping others progress. It’s become my passion to coach and transform people into the best version of themselves.
               <br/><br/>
               As a coach I am extremely dedicated to providing the the best online coaching service to my client, guiding them to success.
               <br/><br/>
               Whether your goal is to reduce body fat, gain muscle mass, fitness, sports specific or you just need extra support and structure on your journey
               <br/><br/>
               My <b> Online Coaching Plan </b>can help you.
            </p>
         </blockquote>
      </div>
   </div>
</div>
)
}
}
export default About