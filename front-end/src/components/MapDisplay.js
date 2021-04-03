import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapDisplay.css'

const APIKEY = 'AIzaSyASWWjp7Y_io1R8OPMlNdNSLDRwj8SdPbs';

const MapDisplay = props => {
    return (
        <Map google={props.google} zoomControlOptions={{position: props.google.maps.ControlPosition.LEFT_CENTER}} streetViewControlOptions={{position: props.google.maps.ControlPosition.LEFT_CENTER}} fullscreenControl={false} className="map-display" initialCenter={{ lat: 40.74852, lng: -73.981687 }} >
 
        <Marker animation={props.google.maps.Animation.DROP} name={'Current location'} label='1' title="Pos" position={{lat: 40.74852, lng: -73.981687}}/>
        <Marker animation={props.google.maps.Animation.DROP} name={'Current location'} label='2' title="Pos" position={{lat: 40.74952, lng: -73.983687}}/>
        <Marker animation={props.google.maps.Animation.DROP} name={'Current location'} label='3' title="Pos" position={{lat: 40.74062, lng: -73.986687}}/>
        <Marker animation={props.google.maps.Animation.DROP} name={'Current location'} label='4' title="Pos" position={{lat: 40.74552, lng: -73.999687}}/>
        
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: APIKEY
})(MapDisplay)