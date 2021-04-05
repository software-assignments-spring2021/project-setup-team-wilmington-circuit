import { useState } from 'react';
import {Button, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
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

    return (
        <>
        <InputGroup className="origin-input">
        <FormControl className="custom-input origin-input-form" onBlur={e=>setOrigin(e.target.value)} onKeyPress={e => {if(e.charCode === 13){setOrigin(e.target.value)}}} placeholder="Enter a starting location"></FormControl>
        <InputGroup.Append>
        <Button className="input-append" variant="light">My Location</Button>
        </InputGroup.Append>
        <DropdownButton className="input-append" as={InputGroup.Append} variant="light" title ={tranportMode ? transportModeNames[tranportMode] : 'Transport Mode'} onSelect={mode=>setTransportMode(mode)}>
            <Dropdown.Item eventKey="walk">Walk</Dropdown.Item>
            <Dropdown.Item eventKey="bike">Bike</Dropdown.Item>
            <Dropdown.Item eventKey="car">Drive</Dropdown.Item>
            <Dropdown.Item eventKey="trans">Public Transport</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Append>
        <Button className="input-append" variant="light">More Options</Button>
        </InputGroup.Append>
        </InputGroup>
        </>
    )
}

export default OriginInput;