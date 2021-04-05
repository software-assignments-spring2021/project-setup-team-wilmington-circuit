import { useState } from 'react';
import {Button, Modal, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import getTestData from '../testData'

import './OriginInput.css'



const OriginInput = props => {
    const [tranportMode, setTransportMode] = useState(null);
    const [name, setName] = useState(''); 

    const transportModeNames = {'walk': 'Walk', 'bike': 'Bike', 'car': 'Drive', 'trans': 'Public Transport'}
    const originData = {loc: null, mode: null, options: null}

    const setOrigin = value => {
        if(!(name == value)) {
            setName(value)
            originData.loc = getTestData.getPlaceLocation(value);
            props.onChange(props.originNumber, originData);
        }
    } 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
        <InputGroup className="origin-input">
        <FormControl className="custom-input" onBlur={e=>setOrigin(e.target.value)} onKeyPress={e => {if(e.charCode === 13){setOrigin(e.target.value)}}} placeholder="Enter a starting location"></FormControl>
        <InputGroup.Append>
        <Button variant="light">My Location</Button>
        </InputGroup.Append>
        <DropdownButton as={InputGroup.Append} variant="light" title ={tranportMode ? transportModeNames[tranportMode] : 'Transport Mode'} onSelect={mode=>setTransportMode(mode)}>
            <Dropdown.Item eventKey="walk">Walk</Dropdown.Item>
            <Dropdown.Item eventKey="bike">Bike</Dropdown.Item>
            <Dropdown.Item eventKey="car">Drive</Dropdown.Item>
            <Dropdown.Item eventKey="trans">Public Transport</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Append>

        <Button variant="light" onClick = {handleShow}>More Options</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>More Options</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Dropdown class="dropselect">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Leave at:
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Now</Dropdown.Item>
                        <Dropdown.Item href="#">In 1 hour</Dropdown.Item>
                        <Dropdown.Item href="#">In 2 hours</Dropdown.Item>
                        <Dropdown.Item href="#">In 3 hours</Dropdown.Item>
                        <Dropdown.Item href="#">In 4 hours</Dropdown.Item>
                        <Dropdown.Item href="#">In 5 hours</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    
                    <form action="/action_page.php">
  <br></br>
  <h5>Avoid:</h5>
  <input type="radio" id="male" name="gender" value="male"></input>
  <label for="male">Tolls</label>
  <br></br>
  <input type="radio" id="female" name="gender" value="female"></input>
  <label for="female">Highways</label>
  <br></br>

</form>
    
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </InputGroup.Append>
        </InputGroup>
        </>
    )
}

export default OriginInput;