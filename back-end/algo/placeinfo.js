const fetch = require("node-fetch");
const querystring = require('querystring')

const makeArr = async (arr) =>{
        const newArr = [];
        for(let i = 0;i<arr.results.length; i++){
            let obj = {
                name: arr.results[i].name,
                location: arr.results[i].geometry.location,
                rating: arr.results[i].rating,
                photoreference: arr.results[i].photos,
                icon: arr.results[i].icon
            }
        newArr.push(obj)
       }
       return(newArr)   
}

const fetchInfo = async (lat, lng, radius, type, keyword, key) => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + querystring.stringify({
        location: lat + ',' + lng,
        radius: radius,
        keyword: keyword,
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

const placeInfo = async(lat, lng, radius, type, keyword) => {
    const result = await fetchInfo(lat, lng, radius, type, keyword, process.env.GMAPS_APIKEY);
    console.log(result[0])
    if(result.length === 0) throw 'No results found!'
    return(result);
}

module.exports = placeInfo;