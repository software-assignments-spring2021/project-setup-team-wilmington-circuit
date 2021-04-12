import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { useEffect, useState } from 'react';
import './MapDisplay.css'

const APIKEY = 'AIzaSyASWWjp7Y_io1R8OPMlNdNSLDRwj8SdPbs';
const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
let map = null


const MapDisplay = props => {
    useEffect(()=> {
        var markerBounds = new props.google.maps.LatLngBounds();
        props.originlocs.forEach(loc => {
            if(loc){
               markerBounds.extend(loc) 
            }
        })
        if(!markerBounds.isEmpty() && map) map.fitBounds(markerBounds);
    })

    const initMap = (mapProps, mapElement) => {
        map = mapElement;
    }

    return (
        <Map google={props.google} onReady={initMap} initialCenter={{ lat: 40.74852, lng: -73.981687 }} zoomControlOptions={{position: props.google.maps.ControlPosition.LEFT_CENTER}} streetViewControlOptions={{position: props.google.maps.ControlPosition.LEFT_CENTER}} fullscreenControl={false} className="map-display">

        {props.origin1 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin1} label="1"></Marker>) : null}
        {props.origin2 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin2} label="2"></Marker>) : null}
        {props.origin3 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin3} label="3"></Marker>) : null}
        {props.origin4 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin4} label="4"></Marker>) : null}
        {props.origin5 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin5} label="5"></Marker>) : null}
        {props.origin6 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin6} label="6"></Marker>) : null}
        {props.origin7 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin7} label="7"></Marker>) : null}
        {props.origin8 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin8} label="8"></Marker>) : null}
        {props.origin9 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin9} label="9"></Marker>) : null}
        {props.origin10 ? (<Marker animation={props.google.maps.Animation.DROP} position={props.origin10} label="10"></Marker>) : null}

        {props.centerPoint ? (<Marker animation={props.google.maps.Animation.DROP} icon={iconBase + 'star.png'} position={props.centerPoint} title="centerPoint" label="X"></Marker>) : null}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: APIKEY
})(MapDisplay)