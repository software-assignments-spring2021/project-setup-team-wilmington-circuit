
import logo from './logo.svg';
import './App.css';
import getTestData from'./testData'
import ScheduleCalendar from './ScheduleCalendar'
import { useEffect, useState } from 'react';
import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header'
import avatar from './images/profile-pic.png';
import './main.css';
import Class from './components/Class';

function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([])
  useEffect(()=>{
    setEnrolledClasses([])
    getTestData.getTestClassIDs(4).then(classIDs => classIDs.forEach(id => {
      setEnrolledClasses([id])
    }))
  }, [])
  return (
    <div>
      <Header></Header>
      <ScheduleCalendar classIDs={enrolledClasses} style="width: 100%" />
    </div> 
  )
}

export default App;
