import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl } from 'react-bootstrap';
import ClassSelect from './ClassSelect';
import Recitation from './Recitation';
import ScheduleCalendar from './ScheduleCalendar'


export default function DropClasses() {
    return (        
    <div class="border">
        <h3 class="m-4">Dropping Class:</h3>
        <ClassSelect></ClassSelect>
        <h3 class="m-4">Recitation:</h3>
        <Recitation></Recitation>
        <div style = {{'text-align': 'center'}} class="button-box col-lg-12 mx-auto">
            <a href="#" class="btn btn-primary m-3" role="button"><h4>Cancel</h4></a>
            <a href="#" class="btn btn-danger" role="button"><h4>Drop</h4></a>
        </div>
        <p>Calendar Goes Here (needs backend to work)</p>
    </div>
    )
}