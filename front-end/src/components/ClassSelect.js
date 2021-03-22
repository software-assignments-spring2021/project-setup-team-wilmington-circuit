import React from 'react'
import ClassDetails from './ClassDetails'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl } from 'react-bootstrap';

const sampleClassObj = {
  className: "DevOps (CSCIUA 480)",
  professor: "Amos Bloomberg",
  location: "Online",
  date: "Mon, Wed - 3:30 - 4:45PM"
};

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getTimeFormat(meetings){
  let meetingList = []
  meetings.forEach(meeting => {
    const meetingDate = new Date(meeting.beginDate)
    meetingList.push(
      `${weekday[meetingDate.getDay()]} ${meetingDate.toLocaleTimeString('en-US', {timeStyle: 'short'})}`
    )
  })
  return meetingList.join(', ');
}

const selected = [];
export default function ClassSelect(props) {
	function returnSelected() {
		return selected;
	} 
    return (
       <div class="card mx-auto border-secondary mb-3 mt-3" style={{ width: '95%'}}>
          <div class="card-header pt-3">
          <h5>{props.name}</h5>
          </div>
          <div class="card-body">
              <div class = "" style = {{float: 'right'}}>
              <input class="form-check-input" type="checkbox" onClick={(e: any) => {
				  e.target.checked
					? selected.push(props.registrationNumber)
					: selected.splice(selected.indexOf(props.registrationNumber), 1)
				}} style = {{width: '20px', height: '30px'}}></input>
              </div>
              <div class = "mr-5" style = {{float: 'right'}}>
                <ClassDetails {...props}/>
              </div>
              <p class="card-text">{props.instructors}, {props.location}</p>
              <p class="card-text">{getTimeFormat(props.meetings)}</p>
          </div>
       </div> 
    )
}