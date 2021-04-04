import React from 'react'
import './Header.css'
import DrawerToggleButton from './DrawerToggleButton'

import Login from './Login';

const Header = props => {

    return(
        <header class="header">
            <nav class="header_nav">
                
                <div class="header_logo">
                    Logo
                </div>
                <div className="spacer" />
                
                <div class="header_nav_items">
                    
                </div>
                
                    <DrawerToggleButton />
                <div className="login">
                    <Login></Login>
                </div>
            </nav>
        </header>
    )
}

export default Header

