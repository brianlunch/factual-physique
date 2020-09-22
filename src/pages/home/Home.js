// libraries
import React, {Fragment} from 'react'

//components
import Navbar from '../../components/transparent-nav/Navbar';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Home = (props) => {
   return (
      <Fragment>
         <Navbar/>
         <Header/>
         <Services className ="s1"/>
         <About className="ab"/>
         <Footer/>
      </Fragment>
   )
}
export default Home