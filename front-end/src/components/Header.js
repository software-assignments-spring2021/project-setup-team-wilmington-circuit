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
            <Navbar.Brand href="/"><img src={logo} alt="NYU Logo" height="50px"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    <Nav.Link href="/">My Courses</Nav.Link>
                    <Nav.Link href="#link">Grades</Nav.Link>
                    <Nav.Link href="#link">Finances</Nav.Link>
                    <Nav.Link href="/personal">Personal Information</Nav.Link>
                    <Nav.Link href="/login">Login Test</Nav.Link>
                    <Nav.Link href="/shopping-cart">Cart Test</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/personal"><HeaderProfile></HeaderProfile></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
       </div> 
    )
}