const fetch = require("node-fetch");
const querystring = require('querystring')


const fetchPhoto = async(photoreference) => {
    const url = 'https://maps.googleapis.com/maps/api/place/photo?' + querystring.stringify({
        key: process.env.GMAPS_APIKEY,
        photoreference: photoreference,
        maxwidth: 500,
        maxheight: 500
    })

    let res = await(fetch(url));
    if(res.ok){
        return res.url
    }
    else throw 'No photo found'
}

module.exports = fetchPhoto