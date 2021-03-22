
import getTestData from './testData'
import ScheduleCalendar from './components/ScheduleCalendar'
import { useEffect, useState } from 'react';
import React from 'react'
import { Button, ButtonToolbar, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import Header from './components/Header'
import avatar from './images/profile-pic.png';
import './main.css';
import Class from './components/Class';
import PersonalInfo from './components/Personal';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CourseSearch from './components/CourseSearch'
import schools from './components/data/nyuschools.json'

function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([])
  const [selectedTerm, setSelectedTerm] = useState('spring21')
  const termNames = {fall20: 'Fall 2020', spring21: 'Spring 2021', summer21: 'Summer 2021'};

  useEffect(() => {
    setEnrolledClasses([])
    getTestData.getTestClassIDs(4).then(classIDs => classIDs.forEach(id => {
      setEnrolledClasses(prev => [...prev, id])
    }))
  }, [selectedTerm])

  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/personal">
              <Header></Header>
              <PersonalInfo></PersonalInfo>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/">
              <Header></Header>
              <div className="topbar-container">
              <h1 className="ml-4 mt-3 mb-4 title" >My Courses</h1>
              <ButtonToolbar className="justify-content-between">
                <ButtonGroup>
                <Button>Edit</Button>
                <DropdownButton id="dropdown-basic-button" title={termNames[selectedTerm]} onSelect={(term, e) => {
                  console.log(`Diplaying ${term} classes`);
                  setSelectedTerm(term);
                }}>
                <Dropdown.Item eventKey="fall20">Fall 2020</Dropdown.Item>
                <Dropdown.Item eventKey="spring21">Spring 2021</Dropdown.Item>
                <Dropdown.Item eventKey="summer21">Summer 2021</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              
              <ButtonGroup>
                <ScheduleCalendar
                classIDs={[enrolledClasses[enrolledClasses.length-1]]}
                />
                <Button>Shopping Cart</Button>
                
                <CourseSearch></CourseSearch>
              </ButtonGroup>
              </ButtonToolbar>
              </div>
              
              {enrolledClasses.map((classID) => {
                return <Class classID={classID}></Class>;
              })}
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
