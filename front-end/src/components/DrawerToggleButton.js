import React from 'react'
import './DrawerToggleButton.css'

const DrawerToggleButton = props => (
    <button className="hamburger-btn" onClick={props.click}>
        <div className="hamburger-line"/>
        <div className="hamburger-line"/>
        <div className="hamburger-line"/>
    </button>
);

export default DrawerToggleButton
