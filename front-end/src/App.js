import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import Result from './components/Result';
import ResultList from './components/ResultList.js';
import getTestData from './testData';

function App() {
  return (
    <>

      <OriginPoints></OriginPoints>
      <ResultList /* results={results} */></ResultList>
      
    </>
  );
}

export default App;
