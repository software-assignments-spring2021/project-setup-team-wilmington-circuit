import { useState } from 'react';
import {Button, Dropdown, Modal, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import getTestData from '../testData'

import './SearchInput.css'

const SearchInput = props => {

    const [rating, setRating] = useState(null);
    const [price, setPrice] = useState(null);
    const [hours, setHours] = useState(null);
    const [type, setType] = useState(null);

    const ratingOptions = [5,4,3,2,1];
    const priceOptions = ["$$$$","$$$","$$","$"]
    const typeOptions = ["accounting", "airport", "amusement_park", "aquarium", "art_gallery", "atm", "bakery", "bank", "bar", "beauty_salon", "bicycle_store", "book_store", "bowling_alley", "bus_station", "cafe", "campground", "car_dealer", "car_rental", "car_repair", "car_wash", "casino", "cemetery", "church", "city_hall", "clothing_store", "convenience_store", "courthouse", "dentist", "department_store", "doctor", "drugstore", "electrician", "electronics_store", "embassy", "fire_station", "florist", "funeral_home", "furniture_store", "gas_station", "gym", "hair_care", "hardware_store", "hindu_temple", "home_goods_store", "hospital", "insurance_agency", "jewelry_store", "laundry", "lawyer", "library", "light_rail_station", "liquor_store", "local_government_office", "locksmith", "lodging", "meal_delivery", "meal_takeaway", "mosque", "movie_rental", "movie_theater", "moving_company", "museum", "night_club", "painter", "park", "parking", "pet_store", "pharmacy", "physiotherapist", "plumber", "police", "post_office", "primary_school", "real_estate_agency", "restaurant", "roofing_contractor", "rv_park", "school", "secondary_school", "shoe_store", "shopping_mall", "spa", "stadium", "storage", "store", "subway_station", "supermarket", "synagogue", "taxi_stand", "tourist_attraction", "train_station", "transit_station", "travel_agency", "university", "veterinary_care", "zoo"]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function humanize(str) {
        var i, frags = str.split('_');
        for (i=0; i<frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
      }
      
      
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
                Type
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {typeOptions.map((type, index) => (
                    <Dropdown.Item href="#action-">{humanize(type)}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>
            
            <br></br>

            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Rating
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {ratingOptions.map((rate, index) => (
                    <Dropdown.Item href="#action-">{rate} Star</Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>

            <br></br>

            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Price
            </Dropdown.Toggle>

            <Dropdown.Menu>
                 {priceOptions.map((cost) => (
                    <Dropdown.Item href="#">{cost}</Dropdown.Item>
                ))}
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