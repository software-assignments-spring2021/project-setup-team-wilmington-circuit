import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import ResultList from './components/ResultList.js';
import getTestData from './testData';
import Login from './components/Login';

function App() {
  return (
    <>
     <Login></Login>
     <OriginPoints></OriginPoints>
     <div>
     <MapDisplay></MapDisplay>
     <ResultList /* results={results} */></ResultList>
     
     </div>
    </>
  );
}

export default App;
