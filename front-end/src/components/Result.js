import React, { useEffect, useState } from 'react';
import {Modal, ModalTitle} from 'react-bootstrap';
import getTestData from '../testData';
import './Result.css';
import generateMapsURL from '../generateMapsURL';

const Result = (props) => {
    const [imageURL, setImageURL] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        try{
            getTestData.getPlaceImage(props.result.photoreference[0].photo_reference).then(url => {

                setImageURL(url)
            }).catch(e => {
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
            setImageURL(props.result.icon)
        }
    }, [props.result])

    let hours;
    if(typeof props.result.hours !== 'undefined'){

        //console.log("gothours")

        if(props.result.hours.open_now){
            hours = "Open"
        }else{
            hours="Closed"
        }
    }else{
        hours = "Not Available"
    }

    let price;
    switch(props.result.price){
        case 1:
            price = "$";
            break;
        case 2:
            price = "$$";
            break;
        case 3:
            price = "$$$";
            break;
        case 4:
            price = "$$$$";
            break;
        case 5: 
            price = "$$$$$";
            break;
        default:
            price = "Not Available";
            break;
    }
    const infoLink = "https://www.google.com/maps/place/?q=place_id:" + props.result.placeId;

    //console.log(props.result)
    //console.log(hours)

    return (
        !props ? (
            <div>Loading...</div>
        ) : (
            <div id={props.result.placeId}>
                <div class='container-fluid'>
                    <div class='row'>
                        <div class='col-12 mt-3'>
                            <div class='card'>
                                <div class='result-card'>
                                    <div class='img-square-wrapper'>
                                        <div style ={{backgroundImage: `url(${imageURL})`}}>
                                            <img src={imageURL} alt='icon'></img>
                                        </div>
                                        
                                    </div>
                                    <div class='card-body'>
                                        <h4 class='card-title'>{props.result.name}</h4>
                                        <p class='card-text'>
                                            Hours: {hours}<br></br>
                                            Rating: {props.result.rating}<br></br>
                                            Price Level: {price}<br></br>
                                        </p>
                                        <a target="_blank" href={infoLink}><small class='text-muted'><u>View on GMaps</u></small></a>
                                        <a className='directions' href='#' onClick={handleShow}><small class='text-muted'><u>Directions</u></small></a>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Directions to {props.result.name}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                From: <br></br>
                                                <ul>
                                                {props.origins.map((origin, index) => {
                                                    //console.log(origin)
                                                    if(origin.loc){
                                                        return (
                                                            <li><a target="_blank" href={generateMapsURL(
                                                                origin.loc.lat + ',' + origin.loc.lng, 
                                                                props.result.loc.lat + ', ' + props.result.loc.lng, 
                                                                origin.placeId, 
                                                                props.result.placeId, 
                                                                origin.mode)
                                                            }>Starting Location {index + 1}</a></li>
                                                            )
                                                    }
                                                })}
                                                </ul>
                                            </Modal.Body> 
                                        </Modal>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        )
    )
}

export default Result;