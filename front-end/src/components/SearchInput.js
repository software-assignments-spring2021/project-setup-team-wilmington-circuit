import { useState } from 'react';
import {Button, ButtonGroup, Dropdown, Modal, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import getTestData from '../testData'

import './SearchInput.css'

const SearchInput = props => {

    const [rating, setRating] = useState(null);
    const [price, setPrice] = useState(null);
    const [cost, setCost] = useState(null);
    const [hours, setHours] = useState('');
    const [type, setType] = useState(null);

    const ratingOptions = [4.5,4,3.5,3,2.5,2,1];
    const priceOptions = ["Any price", "$$$$","$$$","$$","$"]
    const typeOptions = ["any type", "accounting", "airport", "amusement_park", "aquarium", "art_gallery", "atm", "bakery", "bank", "bar", "beauty_salon", "bicycle_store", "book_store", "bowling_alley", "bus_station", "cafe", "campground", "car_dealer", "car_rental", "car_repair", "car_wash", "casino", "cemetery", "church", "city_hall", "clothing_store", "convenience_store", "courthouse", "dentist", "department_store", "doctor", "drugstore", "electrician", "electronics_store", "embassy", "fire_station", "florist", "funeral_home", "furniture_store", "gas_station", "gym", "hair_care", "hardware_store", "hindu_temple", "home_goods_store", "hospital", "insurance_agency", "jewelry_store", "laundry", "lawyer", "library", "light_rail_station", "liquor_store", "local_government_office", "locksmith", "lodging", "meal_delivery", "meal_takeaway", "mosque", "movie_rental", "movie_theater", "moving_company", "museum", "night_club", "painter", "park", "parking", "pet_store", "pharmacy", "physiotherapist", "plumber", "police", "post_office", "primary_school", "real_estate_agency", "restaurant", "roofing_contractor", "rv_park", "school", "secondary_school", "shoe_store", "shopping_mall", "spa", "stadium", "storage", "store", "subway_station", "supermarket", "synagogue", "taxi_stand", "tourist_attraction", "train_station", "transit_station", "travel_agency", "university", "veterinary_care", "zoo"]
    const hoursOptions = ["Any time", "Open now"]

    const [show, setShow] = useState(false);

    function humanize(str) {
        var i, frags = str.split('_');
        for (i=0; i<frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
      }
      
      const setPriceCost = (amt) => {
          if (amt == "$") {
            setPrice(1)
            setCost("$")
          } else if (amt == "$$") {
            setPrice(2)
            setCost("$$")
          } else if (amt == "$$$") {
            setPrice(3)
            setCost("$$$")
          } else if (amt == "$$$$") {
            setPrice(4)
            setCost("$$$$")
          }  else if (amt == "Any price") {
            setPrice(null)
          }
      }

      const setHoursView = (h) => {
        if(h == "Open now") {
            setHours('opennow')
        } else if(h == "Any time") {
            setHours('')
        }
      }
      
    return (
    <div class = "search-container">
    <InputGroup className="origin-input">
    <FormControl defaultValue={props.searchData ? props.searchData.query : null} isInvalid={(props.err)} className="custom-input" placeholder="Search for" id="search-input"></FormControl>
    <FormControl.Feedback tooltip={true} type="invalid">{props.err}</FormControl.Feedback>
    <InputGroup.Append>
  

            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                { type ? humanize(type) : "Type" }
            </Dropdown.Toggle>
            <Dropdown.Menu id="scroll-menu">
                {typeOptions.map((type, index) => (
                    <Dropdown.Item href="#action-" onClick={() => setType(type)}>{humanize(type)}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>
            
            <br></br>
        
            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic" value="elephant">
                { rating ? rating + " stars and up" : "Rating" }
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {ratingOptions.map((rate, index) => (
                    <Dropdown.Item href="#action-" onClick={() => setRating(rate)}> {rate} stars and up</Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>

            <br></br>

            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                { price ? cost : "Any price" }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                 {priceOptions.map((amount) => (
                    <Dropdown.Item href="#" onClick={() => setPriceCost(amount)}>{amount}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>

            <br></br>

            <Dropdown class="dropselect">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                { hours ? "Open now" : "Any time" }
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {hoursOptions.map((hours, index) => (
                    <Dropdown.Item href="#action-" onClick={() => setHoursView(hours)}> {hours} </Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>
  
<Button onClick={()=> props.onSearch({
    query: document.getElementById('search-input').value,
    type: type,
    hours: hours,
    price: price,
    rating: rating
})}>Search</Button>
</InputGroup.Append>
</InputGroup>

</div>
    )
}

export default SearchInput;