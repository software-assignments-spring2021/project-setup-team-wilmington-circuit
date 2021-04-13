import { useState, useEffect } from 'react';
import {Button, Modal, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import getTestData from '../testData'

import './OriginInput.css'

const OriginInput = props => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            setLat(position.coords.latitude)
            console.log("Longitude is :", position.coords.longitude);
            setLng(position.coords.longitude)
            //setHaveLocation(true)
          });
      });
    
    const [tranportMode, setTransportMode] = useState(null);

    const [name, setName] = useState(''); 
    const [haveLocation, setHaveLocation] = useState(false)
    const [haveAddress, setHaveAddress] = useState(false)
    const [latitude, setLat] = useState(null)
    const [longitude, setLng] = useState(null)
    const [address, setAddress] = useState(null)

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
                originData.loc = loc
                props.onChange(props.originNumber, originData);
                setValid(true)
                setOriginData(originData)
            }).catch(e => {
                setValid(false)
                setErrMessage(e.response.data)
                originData.loc = null
                props.onChange(props.originNumber, originData);
                setOriginData(originData)
            })
            
        }
    } 

    const getCoordinates = (position) => {
        console.log(position.coords.latitude)
        setLat(position.coords.latitude)
        console.log({latitude})
        setLng(position.coords.longitude)
        console.log({longitude})
        haveLocation(true)
    }

    // get address reverse geocodes the coordinates obtained through navigator.geolocation
    const getAddress = (lng, lat) => {
        if(lng == null) {
            alert("Could not get your location. lease manually enter your current address or change your browser settings. ")
            
        } else {
            //https://app.geocodeapi.io/api/v1/reverse?point.lat=${latitude}&point.lon=${longitude}&apikey=66fd1840-9805-11eb-847b-6b6f38884161
        let url = `https://app.geocodeapi.io/api/v1/reverse?apikey=66fd1840-9805-11eb-847b-6b6f38884161&point.lat=${lat}&point.lon=${lng}`
        fetch(url)
        .then(response => response.json())
        .then(data => setAddress(data.features[0].properties.label))
        //setAddress(data.features[0].properties.label)
        .catch(error => alert(error))
        console.log({url})
        setHaveAddress(true)
        }
        
    }
    

  /*  const getLocation = () => {
        setAddress("My Current Address")
        setHaveLocation(true)
    }*/

    const handleError = (error) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("Your browser denied the request for Geolocation. Please manually enter your current address or change your browser settings.")
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable. Please manually enter your current address.")
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out. Please manually enter your current address.")
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred. Please manually enter your current address.")
            break;
            default:
            alert("An unknown error occurred. Please manually enter your current address.")
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

        <FormControl isInvalid={!valid} className="custom-input origin-input-form" onBlur={e=>setOrigin(e.target.value)} onKeyPress={e => {if(e.charCode === 13){setOrigin(e.target.value)}}} placeholder="Enter a starting location" value={haveAddress ? address : ''}></FormControl>
        <FormControl.Feedback tooltip={true} type="invalid">{errMessage}</FormControl.Feedback>

        <InputGroup.Append>
        <Button onClick={() => getAddress(longitude, latitude)}className="input-append" variant="light">My Location</Button>
        </InputGroup.Append>
        <DropdownButton className="input-append" as={InputGroup.Append} variant="light" title ={tranportMode ? transportModeNames[tranportMode] : 'Transport Mode'} onSelect={mode=>handleTransportModeChange(mode)}>
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