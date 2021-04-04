import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import Result from './components/Result';
import ResultList from './components/ResultList.js';
import getTestData from './testData';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [origins, setOrigins] = useState([])
  const [mapLoaded, setMapLoaded] = useState(false)

  const loadOriginMarkers = data => {
    setMapLoaded(!mapLoaded)
    setOrigins(data)
    console.log(origins)
  }

  return (
    <>
     <Login></Login>
     <OriginPoints onChange={loadOriginMarkers} ></OriginPoints>
     <div>
     <MapDisplay 
     set={mapLoaded}
     //doesn't update properly when passes as array...
     origin1={origins[0] && origins[0].loc || null}
     origin2={origins[1] && origins[1].loc || null}
     origin3={origins[2] && origins[2].loc || null}
     origin4={origins[3] && origins[3].loc || null}
     origin5={origins[4] && origins[4].loc || null}
     origin6={origins[5] && origins[5].loc || null}
     origin7={origins[6] && origins[6].loc || null}
     origin8={origins[7] && origins[7].loc || null}
     origin9={origins[8] && origins[8].loc || null}
     origin10={origins[9] && origins[9].loc || null}
     ></MapDisplay>
     <ResultList /* results={results} */></ResultList>
     </div>
    </>
  );
}

export default App;
