import React, { useEffect, useState } from "react";
import ClassSelect from "./ClassSelect";
import getTestData from '../testData';
import ScheduleCalendar from './ScheduleCalendar';
import Header from './Header';
import AddClass from './AddClass';
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const enrolled = [];

const selectedClasses = []

export default function ShoppingCart(props) {
	const [cartClasses, setCartClasses] = useState([]);
	const [modalClasses, setModalClasses] = useState([]);

	const handleDisplayClasses = () =>{
        selectedClasses.forEach(classObject =>{
            setModalClasses(prev => [...prev, classObject])
        })
    }

	const handleRemoveClasses = () => {
		console.log(cartClasses, selectedClasses)
		selectedClasses.forEach(classObject => {
			setCartClasses(prev => prev.filter(id => id != classObject.registrationNumber))
		});
		selectedClasses.splice(0, selectedClasses.length);
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

	useEffect(() => {
		setCartClasses([])
		getTestData.getTestClassIDs(4).then(classIDs => classIDs.forEach(id => {
		  setCartClasses(prev => [...prev, id])
		}))
	  }, [])
	return (
    <>
      <Header></Header>
      <div className="topbar-container">
        <h1 className="ml-4 mt-3 mb-4 title">Shopping Cart</h1>
      </div>
      {cartClasses.map((cartClass) => {
        return <ClassSelect onSelect={handleSelectClass} classID={cartClass} />;
      })}
      <div className="staticbar-container">
        <ButtonToolbar id="catalog-static">
          <ScheduleCalendar classIDs={[cartClasses[cartClasses.length - 1]]} />
          <ButtonGroup>
            <Button onClick={() => handleRemoveClasses()} variant="secondary">
              Remove Selected
            </Button>
            <Button onClick={() => handleDisplayClasses()}>Enroll Selected</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
	  {
        modalClasses.map(classObject =>(
                <AddClass hide={handleHideDisplayClasses} inCart={true} classObject = {classObject}></AddClass>
            )
        )}
    </>
  );
}