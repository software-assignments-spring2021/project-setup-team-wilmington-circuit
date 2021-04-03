import React from 'react';
import './Result.css';

const Result = (props) => {
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
                                        <img src={props.result.icon} alt='icon'></img>
                                    </div>
                                    <div class='card-body'>
                                        <h4 class='card-title'>{props.result.name}</h4>
                                        <p class='card-text'>
                                            {props.result.geometry[0].location[0].lat}, {props.result.geometry[0].location[0].lng}<br></br>
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