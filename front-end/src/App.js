import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';

function App() {
  return (
    <>
     <OriginPoints></OriginPoints>
     <MapDisplay></MapDisplay>
    </>
  );
}

export default App;
