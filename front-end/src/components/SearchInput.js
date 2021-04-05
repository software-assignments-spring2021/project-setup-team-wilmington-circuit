import { useState } from 'react';
import {Button, Dropdown, Modal, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import getTestData from '../testData'

import './SearchInput.css'


//inside of return



const SearchInput = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div class = "search-container">
        <InputGroup className="origin-input">
        <FormControl className="custom-input" placeholder="Search for"></FormControl>
        <InputGroup.Append>
        <Button variant="light" onClick = {handleShow}>Options</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Search Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Rating
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">5 Star</Dropdown.Item>
    <Dropdown.Item href="#/action-2">4 Star</Dropdown.Item>
    <Dropdown.Item href="#/action-3">3 Star</Dropdown.Item>
    <Dropdown.Item href="#/action-2">2 Star</Dropdown.Item>
    <Dropdown.Item href="#/action-3">1 Star</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Price
  </Dropdown.Toggle>

<Dropdown.Menu>
    <Dropdown.Item href="#/action-1">$</Dropdown.Item>
    <Dropdown.Item href="#/action-1">$$</Dropdown.Item>
    <Dropdown.Item href="#/action-2">$$$</Dropdown.Item>
    <Dropdown.Item href="#/action-3">$$$$</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Hours
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Open Now</Dropdown.Item>
    <Dropdown.Item href="#/action-2">9am - 10PM</Dropdown.Item>
    <Dropdown.Item href="#/action-3">11pm - 8am</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Modal.Body>
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

</div>
    )
}

export default SearchInput;