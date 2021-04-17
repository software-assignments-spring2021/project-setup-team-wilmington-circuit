const { default: axios } = require('axios');
const querystring = require('querystring')
require('dotenv').config()

/*const reverseGeocode = async (lat, lng => {
    if(!lng) throw 'Cannot geocode without coordinates'
    const res = await axios.get('https://app.geocodeapi.io/api/v1/reverse?' + querystring.stringify({
        lat: lat,
        lon: lng,
        apikey: process.env.GEOCODE_APIKEY,
    })).catch(e => {throw e});
    console.log('API:' + process.env.GEOCODE_APIKEY)
    const results = res;
    console.log('address from backend:' + res)
    return {
        url = res
    }
})*/

const reverseGeocode = () => {
    return process.env.GEOCODE_APIKEY
}


module.exports = reverseGeocode