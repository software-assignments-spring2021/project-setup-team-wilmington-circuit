import React from "react"
import {Button, Modal, Container, Row, Col} from "react-bootstrap";
import Recitation from "./Recitation";

const sampleClass = {
	name: "CSO (CSCI-UA.0201)",
	professor: "Joanna Klukowska",
	location: "Online",
	date: "Tue, Thu - 12:30 - 1:45PM",
	status: "Open",
	department: "Computer Science",
	description: "Covers the internal structure of computers, machine (assembly) language programming, and the use of pointers in high-level languages. Topics include the logical design of computers, computer architecture, the internal representation of data, instruction sets, and addressing logic, as well as pointers, structures, and other features of high-level languages that relate to assembly language. Programming assignments are in both assembly language and other languages.",
	recitations: {}
};

export default function ClassDetails() {
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);	
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Details
			</Button>
		
			<Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
				<Modal.Header closeButton>
					<Modal.Title><b>{sampleClass.name}</b></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p><b>Department: </b>{sampleClass.department}</p>
					<p><b>Instructor: </b>{sampleClass.professor}</p>
					<p><b>Location: </b>{sampleClass.location}</p>
					<p><b>Time: </b>{sampleClass.date}</p>
					<p><b>Status: </b>{sampleClass.status}</p>
					<b>Description:</b><p>{sampleClass.description}</p>
					<b>Recitations:</b>
					<Recitation></Recitation>
					<Recitation></Recitation>
				</Modal.Body>
			</Modal>
		</>
	);
}
