const fetch = require("node-fetch");
const querystring = require('querystring');
const turf = require('@turf/turf');

const makeArr = async (arr) =>{
        const newArr = [];
        for(let i = 0;i<arr.results.length; i++){
            let obj = {
                name: arr.results[i].name,
                loc: arr.results[i].geometry.location,
                rating: arr.results[i].rating,
                photoreference: arr.results[i].photos,
                icon: arr.results[i].icon,
                price: arr.results[i].price_level,
                hours: arr.results[i].opening_hours,
                placeId: arr.results[i].place_id,
            }
        newArr.push(obj)
       }
       //console.log(newArr)
       return(newArr)   
}

const fetchInfo = async (lat, lng, radius, keyword, type, open, price, rating, key) => {
    console.log(open)
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + querystring.stringify({
        location: lat + ',' + lng,
        radius: radius,
        keyword: keyword,
        type: type,
        ...(open) && {opennow: open}, 
        maxprice: price,  
        key: key
    })

    let response = await(fetch(url));
    if(!response.ok){
        throw 'Error fetching places data'
    }
    let res = await response.json();
    const list = await makeArr(res);
    return list;
}

const placeInfo = async(lat, lng, averageDistance, keyword, type, open, price, rating) => {
    const radius = averageDistance * 0.15;
    const result = await fetchInfo(lat, lng, radius, keyword, type, open, price, rating, process.env.GMAPS_APIKEY);
    //console.log(result[0])
    if(result.length === 0) throw 'No results found!'
    return(result);
}

module.exports = placeInfo;