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
    console.log(results)
    if(!results || results.length === 0) throw 'No geocode results for this query';
    return results[0].geometry.coordinates;
}

module.exports = geocode