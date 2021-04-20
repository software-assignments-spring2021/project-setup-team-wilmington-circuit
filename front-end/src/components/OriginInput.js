import { useState } from 'react';
import {Button, Modal, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import getTestData from '../testData'

import './OriginInput.css'

const OriginInput = props => {
    const [tranportMode, setTransportMode] = useState(null);
    const [name, setName] = useState('');
    const [valid, setValid] = useState(true);
    const [errMessage, setErrMessage] = useState(null)

    const transportModeNames = {'walking': 'Walk', 'bicycling': 'Bike', 'driving': 'Drive', 'transit': 'Public Transit'}
    const [originData, setOriginData] = useState({loc: null, mode: null, options: null}) 

    const setOrigin = value => {
        if(value.length === 0){
            setValid(true);
            originData.loc = null
                props.onChange(props.originNumber, originData);
            setOriginData(originData)
        }
        else if(!(name == value)) {
            setName(value)
            getTestData.getPlaceLocation(value).then(loc => {
                originData.query = value
                originData.loc = loc
                props.onChange(props.originNumber, originData);
                setValid(true)
                setOriginData(originData)
            }).catch(e => {
                setValid(false)
                setErrMessage(e.response.data)
                originData.query = value
                originData.loc = null
                props.onChange(props.originNumber, originData);
                setOriginData(originData)
            })
            
        }
    } 

    const handleTransportModeChange = mode => {
        setTransportMode(mode);
        originData.mode = mode;
        props.onChange(props.originNumber, originData);
        setOriginData(originData)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
        <InputGroup className="origin-input">
        <FormControl defaultValue={props.origin ?  props.origin.query : null} isInvalid={!valid} className="custom-input origin-input-form" onBlur={e=>setOrigin(e.target.value)} onKeyPress={e => {if(e.charCode === 13){setOrigin(e.target.value)}}} placeholder="Enter a starting location"></FormControl>
        <FormControl.Feedback tooltip={true} type="invalid">{errMessage}</FormControl.Feedback>
        <InputGroup.Append>
        <Button className="input-append" variant="light">My Location</Button>
        </InputGroup.Append>
        <DropdownButton defaultValue={props.origin && props.origin.mode ? transportModeNames[props.origin.mode] : null} className="input-append" as={InputGroup.Append} variant="light" title ={tranportMode ? transportModeNames[tranportMode] : 'Transport Mode'} onSelect={mode=>handleTransportModeChange(mode)}>
            <Dropdown.Item eventKey="walking">Walk</Dropdown.Item>
            <Dropdown.Item eventKey="bicycling">Bike</Dropdown.Item>
            <Dropdown.Item eventKey="driving">Drive</Dropdown.Item>
            <Dropdown.Item eventKey="transit">Public Transit</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Append>
        <Button className="input-append" variant="light" onClick = {handleShow}>More Options</Button>
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