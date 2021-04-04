import React from 'react'
import './SideDrawer.css'
import MenuDropdown from './MenuDropdown'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Profile</a></li>
                <MenuDropdown title="Friends"></MenuDropdown>
                <MenuDropdown title="Saved Groups"></MenuDropdown>
            </ul>
        </nav>
    )}

export default SideDrawer