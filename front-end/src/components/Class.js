import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl } from 'react-bootstrap';
import '../main.css';
import { getClassInfo } from '../testData'

const sampleClassObj = {
  className: "Agile (CSCIUA 480)",
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

export default function Header(props) {
    const [classObject, setClassObject] = useState({});
    useEffect(()=>{
      getClassInfo(props.classID).then(res => {
        console.log(res);
        setClassObject(()=>res);
      })
    }, [props.classID])
    console.log(props)
    return (
       <div class="classElement card mx-auto border-light mb-3 mt-3" style={{ width: '95%', border_radius: 0}}>
          <div class="card-header pt-3">
          <h5>{classObject.name}</h5>
          </div>
          <div class="card-body">
              <div style = {{float: 'right'}}>
                <a href="/" class="btn btn-secondary">Details</a>
              </div>
              <p class="card-text">{classObject.instructors  ? classObject.instructors.toString() : 'TBD'} - {classObject.location}</p>
              <p class="card-text">{classObject.meetings ? getTimeFormat(classObject.meetings) : 'No Date'}</p>
          </div>
       </div> 
    )
}