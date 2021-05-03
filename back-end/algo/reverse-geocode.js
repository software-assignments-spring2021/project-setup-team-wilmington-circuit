const { default: axios } = require('axios');
const querystring = require('querystring')
require('dotenv').config()

const reverseGeocode = async (lat, lng) => {
    if(!lng) console.log('Cannot geocode without coordinates')
    const res = await axios.get(`https://app.geocodeapi.io/api/v1/reverse?apikey=${process.env.GEOCODE_APIKEY}&point.lat=${lat}&point.lon=${lng}`)
    return res.data.features[0].properties.label
}

module.exports = reverseGeocode