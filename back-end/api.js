const express = require('express')


const router = express.Router();

router.get('/geocode', (req, res) => {
    let query = req.query.q;
    if(query){
        res.send('Geolocate' + query)
    }
    else{
        res.status(400);
        res.send('No geocode query found')
    } 
})

module.exports = router