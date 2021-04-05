import axios from 'axios';

//Mock nearby search from Google's Places API
//Should give similar results to what Google's API would
const getResults_mock = async () => {
    const res = await axios.get('https://my.api.mockaroo.com/mock_nearby_search.json?key=202d5e00');
    const data = res.data;
    console.log(data);
    return data;
}

const getPlaceLocation = (query) => {
    return query && query.length > 0 ? {
        "lat" : 40.730891449013164 + Math.random()*0.02,
        "lng" : -73.99746941257406 + Math.random()*0.05
    } : null;
}

export default {getResults_mock, getPlaceLocation}