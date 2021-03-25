import { useEffect, useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import Header from "./Header";
import getTestData from '../testData';
import Course from './Course';
import AddClass from './AddClass';
import CourseSearch from './CourseSearch'
import './styles/Catalog.css'

const selectedClasses = []

const Catalog = props => {
    const [courses, setCourses] = useState([]);
    const [modalClasses, setModalClasses] = useState([]);

    const handleDisplayClasses = () =>{
        selectedClasses.forEach(classObject =>{
            setModalClasses(prev => [...prev, classObject])
        })
    }

    const handleHideDisplayClasses = (classObject) => {
        console.log(classObject, modalClasses)
        setModalClasses(modalClasses.filter(modalClass => modalClass !== classObject))

    }

    const handleSelectClass = classElement => {
        if(selectedClasses.indexOf(classElement) >= 0) selectedClasses.splice(selectedClasses.indexOf(classElement), 1);
        else selectedClasses.push(classElement);
        console.log(selectedClasses)
    }

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
                <CourseSearch></CourseSearch>
            </ButtonGroup>
        </ButtonToolbar>
        </div>
        {courses.map(course => {
            return (
                <Course {...course}  onSelect={handleSelectClass}></Course>
            )
        })}
        <div className="staticbar-container">
        <ButtonToolbar id="catalog-static">
            <Button onClick={()=>handleDisplayClasses()} variant="secondary">Add to Cart</Button>
            <Button onClick={()=>handleDisplayClasses()}>Enroll Selected</Button>
        </ButtonToolbar>
        </div>
        {
        modalClasses.map(classObject =>(
                <AddClass hide={handleHideDisplayClasses} classObject = {classObject}></AddClass>
            )
        )}
        </>
    )
}

export default Catalog;