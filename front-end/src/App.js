import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import ResultList from './components/ResultList.js';
import getTestData from './testData';
import Header from './components/Header'
import SideDrawer from './components/SideDrawer'



function App() {
 const [toggle, setToggle] = useState(false)

  return (
    <>
    <div style={{height: '100%'}}>
    <button class="header-btn" onClick={() => setToggle(!toggle)}>
      <Header onClick={() => setToggle(!toggle)}/>
      </button>
      <SideDrawer show={toggle} />
      <div style={{marginTop: '64px'}}>
        <OriginPoints></OriginPoints>
        <div>
          <MapDisplay></MapDisplay>
          <ResultList /* results={results} */></ResultList>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;
