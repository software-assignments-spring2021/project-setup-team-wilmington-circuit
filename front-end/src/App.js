import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import ResultList from './components/ResultList.js';
import Header from './components/Header'
import SideDrawer from './components/SideDrawer'


function App() {
  const [toggle, setToggle] = useState(false)
  const [origins, setOrigins] = useState([])
  const [mapLoaded, setMapLoaded] = useState(false);

  const loadOriginMarkers = data => {
    setMapLoaded(!mapLoaded)
    setOrigins(data)
    console.log(origins)
  }

  return (
    <>
      <div style={{ height: "100%" }}>
        <button class="header-btn" onClick={() => setToggle(!toggle)}>
          <Header onClick={() => setToggle(!toggle)} />
        </button>
        <SideDrawer show={toggle} />
        <div style={{ marginTop: "64px" }}>
          <OriginPoints onChange={loadOriginMarkers}></OriginPoints>
          <div>
            <MapDisplay
              set={mapLoaded}
              //doesn't update properly when passes as array...
              origin1={(origins[0] && origins[0].loc) || null}
              origin2={(origins[1] && origins[1].loc) || null}
              origin3={(origins[2] && origins[2].loc) || null}
              origin4={(origins[3] && origins[3].loc) || null}
              origin5={(origins[4] && origins[4].loc) || null}
              origin6={(origins[5] && origins[5].loc) || null}
              origin7={(origins[6] && origins[6].loc) || null}
              origin8={(origins[7] && origins[7].loc) || null}
              origin9={(origins[8] && origins[8].loc) || null}
              origin10={(origins[9] && origins[9].loc) || null}
            ></MapDisplay>
            <ResultList /* results={results} */></ResultList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
