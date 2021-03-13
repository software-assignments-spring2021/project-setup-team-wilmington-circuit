import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import logo from './NYU-Logo-1.png'; 
import avatar from './profile-pic.png';
import HeaderProfile from './HeaderProfile'
import './main.css';


export default function Header() {
    return (
        
       <div class="profile-nav">
           <Container>
            <Row>
                <Col><img class="profile-pic" src={avatar} alt="NYU Logo" height="50px"></img></Col>
                <Col><p class="profile-text">John Smith <br></br> N123456789</p></Col>
            </Row>
            </Container>
       </div> 
    )
}