import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalTitle, ModalFooter } from 'react-bootstrap';
import Dropdown from './Dropdown'

export default function CourseSearch() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setVlaue] = useState(null)

    return (
        <div>
            <Button onClick={handleShow} >Course Search</Button>

            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Course Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label>
                    School:
                    </label>
                    <Dropdown
                    promt = 'Select School'
                    value = {value}
                    onChange = {val => setVlaue()}
                    ></Dropdown>

                    <label>
                    Subject:
                    </label>
                    <Dropdown
                    promt = 'Select Subject'
                    value = {value}
                    onChange = {val => setVlaue()}
                    ></Dropdown>

                    <label>
                    <p>Professor Name:</p></label>
                    <input
                    type="text"
                    />
                    <br></br>
                    <label>
                    <p>Location:</p></label>
                    <input
                    type="text"
                    />
                    <br></br>
                    <label>
                    Day:
                    </label>
                    <Dropdown
                    promt = 'Select Day'
                    value = {value}
                    onChange = {val => setVlaue()}
                    ></Dropdown>

                    <label>
                    Time:
                    </label>
                    <Dropdown
                    promt = 'Select Time'
                    value = {value}
                    onChange = {val => setVlaue()}
                    ></Dropdown>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Search
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}