import React from "react"
import {Button, Modal} from "react-bootstrap";
import Recitation from "./Recitation";

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.";
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

export default function ClassDetails(props) {
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);	
	return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>{props.name}</b> ({props.registrationNumber})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Department: </b>Computer Science [Placeholder]
          </p>
          <p>
            <b>Instructor: </b>
            {props.instructors}
          </p>
          <p>
            <b>Location: </b>
            {props.location}
          </p>
          <p>
            <b>Time: </b>
            {props.meetings ? getTimeFormat(props.meetings) : "No Time"}
          </p>
          <p>
            <b>Status: </b>
            {props.status}
          </p>
          <b>Description:</b>
          <p>{desc}</p>
          <b>Recitation:</b>
          {props.recitations ? (
            props.recitations.map((rec) => {
              return <Recitation {...rec}></Recitation>;
            })
          ) : (
            <Modal.Body>No Recitations</Modal.Body>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
