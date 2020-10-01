import React, { useState } from 'react';
import { Link } from 'react-scroll';

//hooks
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//icons
import { FaBars } from "react-icons/fa";

//assets
import logo from '../../assets/images/Logo_transparent.png';

/*
    To do on nav - pass in signed in user 
    - change navbar items based on if logged in or not
    - (logout / login) etc.
*/

const Nav = ({user}) => {

    const [collapsed, toggleCollapsed] = useState(true)
    const [classOne, setClassOne] = useState('collapse navbar-collapse')
    const [classTwo, setClassTwo] = useState ('navbar-toggler navbar-toggler-right collapsed')
    const [classThree, setClassThree] = useState('navbar navbar-expand-lg fixed-top py-3')

    async function toggleNavbar(){
        await toggleCollapsed(!collapsed)
        const classOneUpdated = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwoUpdated = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        setClassOne(classOneUpdated)
        setClassTwo(classTwoUpdated)
    }

    useScrollPosition(
        ({ prevPos, currPos }) => {
          if (currPos.y<-10){
            setClassThree('navbar navbar-expand-lg fixed-top py-3 active ')
          }else{
            setClassThree('navbar navbar-expand-lg fixed-top py-3')
          }
        },
      )

    
    return (
    <nav className={classThree}>
        <div className="container">
            <img className="nav-logo" src={logo} alt="factual physique logo" />
            <button  onClick={toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars size={20} color="black"/>
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration= {500}
                            >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration= {500}
                            >
                            Coaching
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration= {500}
                            >
                            Vision
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            >
                            Contact
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;