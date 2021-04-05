import React, {useState, useEffect} from 'react'
import './SideDrawer.css'
import MenuDropdown from './MenuDropdown'
import Profile from './Profile'
import getTestData from '../testData';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <>
            <nav className={drawerClasses}>
                <ul>
                    <ProfilePage />
                    <MenuDropdown title="Friends"></MenuDropdown>
                    <MenuDropdown title="Saved Groups"></MenuDropdown>
                </ul>
                
            </nav>

                
        </>
            
    )}

function ProfilePage() {
    return <Profile />;

    }

export default SideDrawer;