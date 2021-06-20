const express = require('express')
const geocode = require('./algo/geocode')
const reverseGeocode = require('./algo/reverse-geocode')
const geocenter = require('./algo/geocenter').geoCenter
const bodyParser = require('body-parser');
const placeInfo = require('./algo/placeinfo');
const fetchPhoto = require('./algo/photoReference')

const router = express.Router();

router.use(bodyParser.json())

router.get('/geocode', (req, res) => {
    let query = req.query.q;
    if(!query) {
        res.status(400);
        res.send('No query found.');
    }
    else if(query.length > 10){
        geocode(query).then(loc => {
            res.json(loc)
        }).catch(e => {
            console.error(e)
            res.status(500);
            res.send('Internal error geocoding ' + query + ', make sure this is a proper address.');
        })
    }
    else{
        res.status(400);
        res.send('Query is too short to geocode, please enter a proper address.');
    } 
})


router.post('/reverse-geocode', (req, res) => {
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    if(!longitude || !latitude) {
        res.status(400);
        res.send('No query found');
    }
    else if(longitude){
        reverseGeocode(latitude, longitude).then(address => {
            return res.status(200).json({address, okay: true})
        }).catch(e => {
            console.error(e)
            res.status(500);
            res.send('Internal error reverse geocoding latitude ' + latitude + ' and longitude ' + longitude)
        })
    }
    else{
        res.status(400);
        res.send('Unknown error.');
    } 
})

router.get('/photo', (req, res) => {
    let query = req.query.photoreference;
    if(!query) {
        res.status(400);
        res.send('No query found');
    }
    fetchPhoto(query).then(img => {
        res.send(img)
    }).catch(e => {
        console.error(e)
            res.status(500);
            res.send('Image not found')
    })

})

router.post('/search', (req, res) => {
    let origins = req.body.origins;
    let search = req.body.search;
    if(!origins){
        res.status(400);
        res.send('No origins found');
    }
    if(!search){
        res.status(400);
        res.send('No search found');
    }
    else {
        geocenter(origins).then(data => {
            if(data.loc){

                placeInfo(data.loc.lat, data.loc.lng, data.averageDistance, search.query, search.type, (search.hours == 'opennow'), search.price, search.rating).then(places => {
                    if(places){
                        res.send({loc:data.loc, averageDuration: data.averageDuration, placeList: places}) 
                        //Sends both location and nearby places in one response
                    }
                }).catch(e => {
                    console.error(e)
                    res.status(500);
                    res.send('Internal error finding places: ' + e)
                });
               
             
            } 
            else {
                res.status(500);
                res.send('Internal error geocentering starting locations.')
            }
        }).catch(e => {
            console.error(e)
            res.status(500);
            res.send('Internal error geocentering starting locations: ' + e)
        })
    }
})

module.exports = router