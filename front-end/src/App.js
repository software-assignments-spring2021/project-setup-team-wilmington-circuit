import logo from './logo.svg';
import './App.css';
import getTestData from'./testData'
import ScheduleCalendar from './ScheduleCalendar'
import { useEffect, useState } from 'react';


function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([])
  useEffect(()=>{
    setEnrolledClasses([])
    getTestData.getTestClassIDs(4).then(classIDs => classIDs.forEach(id => {
      setEnrolledClasses([id])
    }))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <ScheduleCalendar classIDs={enrolledClasses} style="width: 100%" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
