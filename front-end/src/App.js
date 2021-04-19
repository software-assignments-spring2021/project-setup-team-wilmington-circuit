import React, { useState } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import ResultList from './components/ResultList.js';
import Header from './components/Header'
import SideDrawer from './components/SideDrawer'
import getTestData from './testData'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

import SearchInput from './components/SearchInput'


function App() {
  const [toggle, setToggle] = useState(false)
  const [origins, setOrigins] = useState([]);
  const [centerPoint, setCenterPoint] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [averageDuration, setAverageDuration] = useState(null)
  const [searchError, setSearchError] = useState(null)
  const [places, setPlaces] = useState([])
  const [user, setUser] = useState(null);


  const loadOriginMarkers = originData => {
    const filteredOrigins = originData.filter(origin => origin.loc)
    setMapLoaded(!mapLoaded)
    setOrigins(filteredOrigins)
    setPlaces([])
    console.log(origins)
  }

  const pad2 = (number) => { 
    return (number < 10 ? '0' : '') + number 
  }

  const onSearch = searchData => {
    if(origins.length>=2){
      if(searchData.query.length < 3){
        setSearchError('Search query is too short')
        return
      }
      getTestData.search(origins, searchData).then(data => {
        setCenterPoint(data.loc)
        setSearchError(null)
        setPlaces(data.placeList)
        if(data.averageDuration){
          const hour = Math.floor(data.averageDuration/3600), minute = (Math.floor(data.averageDuration/60))%60, second=(Math.floor(data.averageDuration/3600))% 60;
          setAverageDuration(`${hour > 0 ? hour + ':' : ''}${pad2(minute)}:${pad2(second)}`);
        } 
        else setAverageDuration(null)
      }).catch(e => {
        const err = e.response.data
        setSearchError(err)
        setPlaces([])
        setAverageDuration(null)
      })
    }
    else setSearchError('Must enter at least 2 valid starting locations')
  }
  

  return (
    <>
      <div className="html">
        <button class="header-btn">
          <Header onAuth={(user) => setUser(user)} show ={toggle} setShow={setToggle} />
        </button>
        <SideDrawer onGroupSelect={origins => {loadOriginMarkers(origins)}} show={toggle} user={user} setShow={setToggle}/>
        <div className="content" id="main-container">
          <div id="input-container">
          <SearchInput err={searchError} onSearch={onSearch}></SearchInput>
          <OriginPoints onChange={loadOriginMarkers}></OriginPoints>
          <div>
          <a id="share-link">Share this map</a>
          <p id="average-duration">{averageDuration ? 'Average Travel Time: ' + averageDuration : null}</p>
          
          </div>
          </div>
          <div className='map-result-container'>
            <MapDisplay
              set={mapLoaded}
              //doesn't update properly when passes as array...
              originlocs = {origins.map(origin => origin.loc)}
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

              centerPoint={centerPoint}
              placeList={places}
            ></MapDisplay>
            
            {places.length>0 &&
            <ResultList results={places} origins={origins}></ResultList>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
