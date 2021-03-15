import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl } from 'react-bootstrap';

const sampleClassObj = {
  className: "DevOps (CSCIUA 480)",
  professor: "Amos Bloomberg",
  location: "Online",
  date: "Mon, Wed - 3:30 - 4:45PM"
};

export default function ClassSelect() {
    return (
       <div class="card mx-auto border-secondary mb-3 mt-3" style={{ width: '95%'}}>
          <div class="card-header pt-3">
          <h5>{sampleClassObj.className}</h5>
          </div>
          <div class="card-body">
              <div class = "" style = {{float: 'right'}}>
              <input class="form-check-input" type="checkbox"  style = {{width: '20px', height: '30px'}}></input>
              </div>
              <div class = "mr-5" style = {{float: 'right'}}>
                <a href="/" class="btn btn-primary">Details</a>
              </div>
              <p class="card-text">{sampleClassObj.professor}, {sampleClassObj.location}</p>
              <p class="card-text">{sampleClassObj.date}</p>
          </div>
       </div> 
    )
}