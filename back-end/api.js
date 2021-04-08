const express = require('express')
const geocode = require('./algo/geocode')


const router = express.Router();

router.get('/geocode', (req, res) => {
    let query = req.query.q;
    if(!query) {
        res.status(400);
        res.send('No query found');
    }
    else if(query.length > 10){
        geocode(query).then(coords => {
            res.json({
                lat : coords[1],
                lng : coords[0]
            })
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

module.exports = router