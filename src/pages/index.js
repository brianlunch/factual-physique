// libraries
import React, {Fragment} from 'react'

//components
import Layout from '../components/Layout';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Home = (props) => {
   return (
      <Layout>
         <Header/>
         <Services className ="s1"/>
         <About className="ab"/>
         <Footer/>
      </Layout>
   )
}
export default Home