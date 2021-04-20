const express = require('express')
const geocode = require('./algo/geocode')
const reverseGeocode = require('./algo/reverse-geocode')
const geocenter = require('./algo/geocenter')
const bodyParser = require('body-parser');



const router = express.Router();

router.use(bodyParser.json())

router.get('/geocode', (req, res) => {
    let query = req.query.q;
    if(!query) {
        res.status(400);
        res.send('No query found');
    }
    else if(query.length > 10){
        geocode(query).then(loc => {
            res.json(loc)
        }).catch(e => {
            console.error(e)
            res.status(500);
            res.send('Internal error geocoding ' + query)
        })
    }
    else{
        res.status(400);
        res.send('Query is too short to geocode');
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

router.post('/search', (req, res) => {
    let origins = req.body.origins;
    if(!origins){
        res.status(400);
        res.send('No origins found');
    }
    else {
        geocenter(origins).then(loc => {
            if(loc) res.json(loc)
            else {
                res.status(500);
                res.send('Internal error geocentering starting locations')
            }
        }).catch(e => {
            console.error(e)
            res.status(500);
            res.send('Internal error geocentering starting locations: ' + e)
        })
    }
})

module.exports = router