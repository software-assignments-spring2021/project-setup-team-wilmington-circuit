import React, { useEffect, useState } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import ResultList from './components/ResultList.js';
import Header from './components/Header'
import SideDrawer from './components/SideDrawer'
import getTestData from './testData'
import { Button, ButtonGroup, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import copyToClipboard from './copyToClipboard';
import { Helmet } from 'react-helmet';

import SearchInput from './components/SearchInput'

import testData from './testData';



function App() {
  const [toggle, setToggle] = useState(false)
  const [origins, setOrigins] = useState([]);
  const [centerPoint, setCenterPoint] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [averageDuration, setAverageDuration] = useState(null)
  const [searchData, setSearchData] = useState(null)
  const [searchError, setSearchError] = useState(null)
  const [places, setPlaces] = useState([])
  const [sharelink, setSharelink] = useState(null)
  const [sharelinkError, setSharelinkError]  = useState(false);
  const [user, setUser] = useState(null);
  const [id_token, setToken] = useState(null);
  const [searching, setSearching] = useState(false);
  const [sideDrawerLoaded, setSideDrawerLoaded] = useState(false);


  let link_id;

  const loadOriginMarkers = originData => {
    let filteredOrigins = originData.filter(origin => origin.loc)
    if (filteredOrigins.length > 10) filteredOrigins = filteredOrigins.slice(0, 10)
    setMapLoaded(!mapLoaded)
    setOrigins(filteredOrigins)
    setPlaces([])
    setSharelink(null);
    setSharelinkError(false)
  }

  const addOrigin = originData => {
    loadOriginMarkers([...origins, originData])
  }

  const pad2 = (number) => { 
    return (number < 10 ? '0' : '') + number 
  }

  const onSearch = searchData => {
    if(origins.length>=2){
      if(searchData.query.length < 3){
        setSearchError('Search query is too short. Please enter a valid search.')
        return
      }
      setSearchData(searchData)
      setSharelink(null)
      setSharelinkError(false)
      setSearching(true);
      getTestData.search(origins, searchData).then(data => { 
        setSearching(false);
        setCenterPoint(data.loc)
        setSearchError(null)
        setPlaces(data.placeList)
        if(data.averageDuration){
          const hour = Math.floor(data.averageDuration/3600), minute = (Math.floor(data.averageDuration/60))%60, second=(Math.floor(data.averageDuration/3600))% 60;
          setAverageDuration(`${hour > 0 ? hour + ':' : ''}${pad2(minute)}:${pad2(second)}`);
        } 
        else setAverageDuration(null)
      }).catch(e => {
        setSearching(false);
        const err = e.response.data
        setSearchError(err)
        setPlaces([])
        setAverageDuration(null)
      })
    }
    else setSearchError('Must enter at least 2 valid starting locations. Double check origins are valid.');
  }

  const createShareLink = () => {
    if(!sharelink){
      if(origins && origins.length >= 2 && searchData && places && averageDuration){
        testData.uploadSharelink(origins, searchData, places, averageDuration, link_id).then(link => {
          setSharelink(window.location.host + '?sharelink=' + link)
          setSharelinkError(false)
        })
      }
      else {
        setSharelink('Cannot share incomplete map')
        setSharelinkError(true)
      }
    }
    else copyToClipboard(sharelink)
  }  

  const loadSharelink = () =>{
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      link_id = urlParams.get("sharelink");

      if (link_id) {
        testData
          .getSharelink(link_id)
          .then((res) => {
            loadOriginMarkers(res.origins);
            setAverageDuration(res.averageDuration);
            setPlaces(res.places);
            setSearchData(res.searchData);
            setSharelink(window.location.host + "?sharelink=" + res.link_id);
            setSharelinkError(false);
          })
          .then(() => {
            setMapLoaded(!mapLoaded);
          })
          .catch((e) => {
            alert(
              "This link appears to be invalid. It may have expired or been deleted."
            );
            setSharelink(null);
            setSharelinkError(false);
          });
      }
  }

  useEffect(loadSharelink, [])

  return (
		<>
      
			<div className="html">
      <Helmet>
        <title>MeetMe</title>
        <meta name="description" content="Find the best place to meet up with your friends. Plan a meet up with up to 10 friends, and ensure that everyone has a fair travel time." />
      </Helmet>
				<button class="header-btn">
					<Header
						onAuth={(user, id_token) => {
							setUser(user);
							setToken(id_token);
						}}
						show={toggle}
						setShow={setToggle}
					/>
				</button>
				<SideDrawer
					loaded={sideDrawerLoaded}
					onGroupSelect={(origins) => {
						loadOriginMarkers(origins);
					}}
					onLocationSelect={(origin) => {
						addOrigin(origin);
					}}
					show={toggle}
					user={user}
					id_token={id_token}
					setShow={setToggle}
				/>
				<div className="content" id="main-container">
					<div id="input-container">
						<SearchInput
							searchData={searchData}
							err={searchError}
							onSearch={onSearch}
						></SearchInput>
						<OriginPoints
							onSave={() => {
								setSideDrawerLoaded(!sideDrawerLoaded);
								console.log("reload");
							}}
							origins={origins}
							user={user}
							id_token={id_token}
							onChange={loadOriginMarkers}
						></OriginPoints>
						<div>
							<OverlayTrigger
								overlay={<Tooltip>{sharelink}</Tooltip>}
								s
								trigger={sharelink ? ["hover"] : null}
								delay={500}
								placement="auto-end"
							>
								<a
									onClick={createShareLink}
									href={sharelinkError ? null : "#sharelink"}
									id="share-link"
								>
									{sharelink && sharelink.length > 0
										? sharelinkError
											? "Cannot share incomplete map"
											: "Click to copy share link"
										: "Share this map"}
								</a>
							</OverlayTrigger>

							<p id="average-duration">
								{averageDuration
									? "Average Travel Time: " + averageDuration
									: null}
							</p>
							<p
								style={{ display: searching ? "block" : "none" }}
								id="searching"
							>
								Searching...
							</p>
						</div>
					</div>
					<div className="map-result-container">
						<MapDisplay
							set={mapLoaded}
							//doesn't update properly when passes as array...
							originlocs={origins.map((origin) => origin.loc)}
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
							//centerPoint={centerPoint}
							placeList={places}
						></MapDisplay>

						{places.length > 0 && (
							<ResultList results={places} origins={origins}></ResultList>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
