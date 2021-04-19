import React from 'react'
import './Header.css'
import DrawerToggleButton from './DrawerToggleButton'
import logo from '../img/logo.png';

import Login from './Login';

const Header = props => {
    function clicked(){
        props.setShow(!props.show);
    }
    return(
        <header class="header">
            <nav class="header_nav">
                
                <div class="header_logo">
                    <img src={logo} alt="MeetMe Logo" height="70%"></img>
                </div>
                <div className="spacer" />
                
                <div class="header_nav_items">    
                </div>
                <div onClick={clicked}>
                    <DrawerToggleButton show={props.show} setShow={props.setShow}/>
                </div>
                <div className="login">
                    <Login onAuth={props.onAuth}></Login>
                </div>
            </nav>
        </header>
    )
}

export default Header

