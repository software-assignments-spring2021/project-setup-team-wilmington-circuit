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
    <FormControl isInvalid={(props.err)} className="custom-input" placeholder="Search for"></FormControl>
    <FormControl.Feedback tooltip={true} type="invalid">{props.err}</FormControl.Feedback>
    <InputGroup.Append>
    <Button variant="light" onClick = {handleShow}>Options</Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Search Options</Modal.Title>
    </Modal.Header>
        <Modal.Body>
            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Rating
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">5 Star</Dropdown.Item>
                <Dropdown.Item href="#">4 Star</Dropdown.Item>
                <Dropdown.Item href="#">3 Star</Dropdown.Item>
                <Dropdown.Item href="#">2 Star</Dropdown.Item>
                <Dropdown.Item href="#">1 Star</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Price
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">$</Dropdown.Item>
                <Dropdown.Item href="#">$$</Dropdown.Item>
                <Dropdown.Item href="#">$$$</Dropdown.Item>
                <Dropdown.Item href="#">$$$$</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Hours
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Open Now</Dropdown.Item>
                <Dropdown.Item href="#/action-2">9am - 10PM</Dropdown.Item>
                <Dropdown.Item href="#/action-3">11pm - 8am</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
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
<Button onClick={()=> props.onSearch()}>Search</Button>
</InputGroup.Append>
</InputGroup>

</div>
    )
}

export default SearchInput;