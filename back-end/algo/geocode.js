const { default: axios } = require('axios');
const querystring = require('querystring')
require('dotenv').config()


const geocode = async query => {
    if(!query || query.length === 0) throw 'Cannot geocode empty query'
    const res = await axios.get('https://app.geocodeapi.io/api/v1/search?' + querystring.stringify({
        apikey: process.env.GEOCODE_APIKEY,
        text: query
    })).catch(e => {throw e});
    const results = res.data.features;
    if(!results || results.length === 0) throw 'No geocode results for this query';
    const coords = results[0].geometry.coordinates;
    return {
        lat : coords[1],
        lng : coords[0]
    }
}

module.exports = geocode