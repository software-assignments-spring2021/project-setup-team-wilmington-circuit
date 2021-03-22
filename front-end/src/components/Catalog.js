import { useEffect, useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import Header from "./Header"
import getTestData from '../testData'
import Course from './Course'
import './styles/Catalog.css'

const Catalog = props => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        getTestData.getTestCourses().then(res => {
            setCourses(res);
        }
        )
    }, [])
    return (
        <>
        <Header></Header>
        <div className="topbar-container">
        <h1 className="ml-4 mt-3 mb-4 title" >Catalog</h1>
        <ButtonToolbar className="justify-content-between">
            <InputGroup>
            <DropdownButton title="School"></DropdownButton>
            <DropdownButton title="Department"></DropdownButton>
            <InputGroup.Prepend>
                <InputGroup.Text>@NYU</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            type="text"
            placeholder="Class Name"
            aria-label="Class Name"
            aria-describedby="btnGroupAddon"
            />
            </InputGroup>
            <ButtonGroup>
                <Button>More Filters</Button>
            </ButtonGroup>
        </ButtonToolbar>
        </div>
        {courses.map(course => {
            return (
                <Course {...course}></Course>
            )
        })}
        <div className="staticbar-container">
        <ButtonToolbar id="catalog-static">
            <Button variant="secondary">Add to Cart</Button>
            <Button>Enroll Selected</Button>
            
        </ButtonToolbar>
        </div>
        </>
    )
}

export default Catalog;