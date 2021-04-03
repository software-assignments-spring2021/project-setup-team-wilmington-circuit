import { useState } from 'react';
import {Button, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';

import './OriginInput.css'

const OriginInput = props => {
    const [tranportMode, setTransportMode] = useState(null);
    const transportModeNames = {'walk': 'Walk', 'bike': 'Bike', 'car': 'Drive', 'trans': 'Public Transport'}
    return (
        <>
        <InputGroup className="origin-input">
        <FormControl placeholder="Enter a starting location"></FormControl>
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
        <Button>More Options</Button>
        </InputGroup.Append>
        </InputGroup>
        </>
    )
}

export default OriginInput;