import React from 'react'

const FeatureBox = ({icon,title,text}) =>  {

   return (
      <div className = "featureBox">      
         <h3>{icon}</h3>                      
         <h4>{title}</h4>
         <p>{text}</p>
      </div>
                     
   )
}
export default FeatureBox