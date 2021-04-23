import React, {useState, useEffect } from 'react';
import Result from './Result.js';
import getTestData from '../testData';
import './ResultsList.css'

const ResultList = (props) => {
    const [mockResults, setData] = useState([]);
    const [places, setPlaces] = useState([]);
    const [scrollStyle, setScrollStyle] = useState('hidden')
    useEffect(()=>{
        getTestData.getResults_mock().then(res => {
            setData(res);
        }
        )
    }, [])

    return (
        //perma false for now
        (false && !props) ? (
            <div>Loading...</div>
        ) : (
            <div class='card-group' style={{'overflowY': scrollStyle}} onMouseOver={()=>setScrollStyle('scroll')} onMouseOut={()=>setScrollStyle('hidden')}>
                {props.results.map((result) => {
                    return (
                        <Result result={result} origins={props.origins}></Result>
                    )
                })}
            </div>
            
        )
    )
}

export default ResultList;