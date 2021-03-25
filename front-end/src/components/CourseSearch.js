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
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    

    return (
        <div>
            <Button onClick={handleShow} >More Filters</Button>

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
                    value={value2}
                    onChange={val => setValue2(val)}
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
                    value={value3}
                    onChange={val => setValue3(val)}
                    ></Dropdown>

                    <label>
                    Time:
                    </label>
                    <Dropdown
                    options={times} 
                    prompt='Select Time'
                    id='id'
                    label='time'
                    value={value4}
                    onChange={val => setValue4(val)}
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