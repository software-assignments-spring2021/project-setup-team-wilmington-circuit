import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl } from 'react-bootstrap';
import logo from '../images/NYU-Logo-1.png'; 
import avatar from '../images/profile-pic.png';
import HeaderProfile from './HeaderProfile'
import '../main.css';

export default function Header() {
    return (
       <div class="profile-nav">
           <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="NYU Logo" height="50px"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    <Nav.Link href="#home">My Courses</Nav.Link>
                    <Nav.Link href="#link">Grades</Nav.Link>
                    <Nav.Link href="#link">Finances</Nav.Link>
                    <Nav.Link href="#link">Personal Information</Nav.Link>
                </Nav>
                <Nav>
                    <HeaderProfile></HeaderProfile>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
       </div> 
    )
}