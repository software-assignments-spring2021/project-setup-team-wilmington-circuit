import React, { useEffect, useState } from 'react';
import getTestData from '../testData';
import './Result.css';

const Result = (props) => {
    const [imageURL, setImageURL] = useState(null);

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

    return (
        !props ? (
            <div>Loading...</div>
        ) : (
            <div>
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
                                            {props.result.location.lat}, {props.result.location.lng}<br></br>
                                            Rating: {props.result.rating}<br></br>
                                        </p>
                                        <a href='#'><small class='text-muted'><u>More Info</u></small></a>
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