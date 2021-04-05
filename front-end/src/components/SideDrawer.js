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
        <Router>
            <nav className={drawerClasses}>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <MenuDropdown title="Friends"></MenuDropdown>
                    <MenuDropdown title="Saved Groups"></MenuDropdown>
                </ul>
            </nav>

            <Route path="/profile">
                <ProfilePage />
            </Route>
        </Router>
    )}

function ProfilePage() {
    return <Profile />;

    }

export default SideDrawer;