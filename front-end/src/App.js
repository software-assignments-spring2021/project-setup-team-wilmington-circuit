import React, { Component } from 'react'
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginPoints from './components/OriginPoints';
import MapDisplay from './components/MapDisplay';
import Result from './components/Result';
import ResultList from './components/ResultList.js';
import getTestData from './testData';
import Header from './components/Header'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

class App extends Component {
  state = {
      sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen} 
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
  }
  return (
    <>
    <div style={{height: '100%'}}>
      <Header drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}

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
}

export default App;
