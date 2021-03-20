import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl } from 'react-bootstrap';
import ClassSelect from './ClassSelect';

export default function SwapClasses() {
    return (        
    <div class="border">
        <h3 class="m-4">Swapping Class:</h3>
        <ClassSelect></ClassSelect>
        <h3 class="m-4">With Class:</h3>
        <ClassSelect></ClassSelect>
        <div style = {{'text-align': 'center'}} class="button-box col-lg-12 mx-auto">
            <a href="#" class="btn btn-primary m-3" role="button"><h4>From Cart</h4></a>
            <a href="#" class="btn btn-primary" role="button"><h4>From Catalog</h4></a>
        </div>
        <a href="#" style = {{'text-align': 'center'}} class="btn btn-danger m-3" role="button"><h4> Cancel </h4></a>
        <p>Calendar Goes Here (needs backend to work)</p>
    </div>
    )
}