import React from 'react'

//images
import AdamTransparent from '../../assets/images/latestcutout_compressed.png';

const About = () => {
   return (
      <div className="About" id="about">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-md-8 col-xs-12 section center-parent">
                  <div className="center-child">
                     <h1 className="section-heading text-center">My Vision</h1>
                     <br/><br/>
                     <blockquote className="container">
                        <p className="text-left planText">
                           Ever since I got into health and fitness, I’ve always loved helping others progress. It’s become my passion to coach and transform people into the best version of themselves.
                           <br/><br/>
                           As a coach I am extremely dedicated to providing the the best online coaching service to my client, guiding them to success.
                           <br/><br/>
                           Whether your goal is to reduce body fat, gain muscle mass, fitness, sports specific or you just need extra support and structure on your journey
                           <br/><br/>
                           My <b className="alt-bold">Online Coaching</b> can help you.
                        </p>
                     </blockquote>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 col-xs-12 ">
                  <img src={AdamTransparent} className="cut-out" alt="a picture of online fitness coach Adam Carroll"/>
               </div>
            </div>
         </div>
      </div>
   )
}
export default About