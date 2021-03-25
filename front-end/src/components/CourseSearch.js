import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalTitle, ModalFooter } from 'react-bootstrap';
import Dropdown from './Dropdown'
import schools from './data/nyuschools.json'
import times from './data/times.json'
import subjects from './data/subjects.json'
import days from './data/days.json'

export default function CourseSearch() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState(null);
    
    const mystyle = {
        height: 900
      };

    return (
        <div>
            <Button onClick={handleShow} >More Filters</Button>

            <Modal show={show} onHide={handleClose} animation={false} style={mystyle}>
            <Modal.Header closeButton>
            <Modal.Title>Course Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label>
                    School:
                    </label>
                    <Dropdown 
                    options={schools} 
                    prompt='Select School'
                    id='code'
                    label='name'
                    value={value}
                    onChange={val => setValue(val)}
                    ></Dropdown>
                    <label>
                    
                    Subject:
                    </label>
                    <Dropdown
                    options={subjects} 
                    prompt='Select Subject'
                    id='id'
                    label='name'
                    value={value}
                    onChange={val => setValue(val)}
                    ></Dropdown>

                    <label>
                    <p>Professor Name:</p></label>
                    <input
                    type="text"
                    />
                    <br></br>

                    <label>
                    Day:
                    </label>
                    <Dropdown
                    options={days} 
                    prompt='Select Day'
                    id='id'
                    label='name'
                    value={value}
                    onChange={val => setValue(val)}
                    ></Dropdown>

                    <label>
                    Time:
                    </label>
                    <Dropdown
                    options={times} 
                    prompt='Select Time'
                    id='id'
                    label='time'
                    value={value}
                    onChange={val => setValue(val)}
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