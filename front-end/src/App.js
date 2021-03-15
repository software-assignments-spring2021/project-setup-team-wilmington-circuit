
import getTestData from'./testData'
import ScheduleCalendar from './components/ScheduleCalendar'
import { useEffect, useState } from 'react';
import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header'
import avatar from './images/profile-pic.png';
import './main.css';
import Class from './components/Class';
import PersonalInfo from './components/Personal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([])
  useEffect(()=>{
    setEnrolledClasses([])
    getTestData.getTestClassIDs(4).then(classIDs => classIDs.forEach(id => {
      setEnrolledClasses(prev => [...prev, id])
    }))
  }, [])
  return (
    <>
    <div>
      <Router>
        <Switch>
          <Route path="/personal">
            <Header></Header>
            <PersonalInfo></PersonalInfo>
          </Route>
          
          <Route path="/">
            <Header></Header>
            <h1 class = "ml-4 mt-3 mb-4">My Courses</h1>
            {enrolledClasses.map(classID => {console.log(enrolledClasses); return (<Class classID={classID}></Class>)})} 
            <ScheduleCalendar classIDs={[enrolledClasses[enrolledClasses.length - 1]]} style="width: 100%" />
          </Route>

          
        </Switch>
      </Router>
      
    </div> 
    </>
  )
}

export default App;
