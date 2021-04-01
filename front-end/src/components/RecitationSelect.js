import React from "react";
import {Card} from "react-bootstrap";
import "./styles/RecitationSelect.css";

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTimeFormat(meetings){
  let meetingList = []
  meetings.map(meeting => {
    const meetingDate = new Date(meeting.beginDate)
    meetingList.push(
      `${weekday[meetingDate.getDay()]} ${meetingDate.toLocaleTimeString('en-US', {timeStyle: 'short'})}`
    )

  })
  return meetingList.join(', ');
}

export default function Recitation(props) {
    return (
       <div class="card mx-auto border-secondary mb-3 mt-3">
          <Card.Body>
		  		<div className = "selectButton">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
				</div>
              <Card.Text>{props.instructors}, {props.location}</Card.Text>
              <Card.Text>{props.meetings ? getTimeFormat(props.meetings) : 'No Time'}</Card.Text>
          </Card.Body>
       </div> 
    )
}