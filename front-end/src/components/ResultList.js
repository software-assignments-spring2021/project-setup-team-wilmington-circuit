import React, {useState, useEffect } from 'react';
import Result from './Result.js';
import getTestData from '../testData';
const ResultList = (props) => {
    const [mockResults, setData] = React.useState([]);
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
            <div class='card-group'>
                {mockResults.map((result) => {
                    return (
                        <Result result={result}></Result>
                    )
                })}
            </div>
            
        )
    )
}

export default ResultList;