const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('./db');
const Sharelink = require('./models/Sharelink')
const nanoid = require('nanoid')

router.use(bodyParser.json())

router.post('/create', (req, res) => {
    const origins = req.body.origins;
    const searchData = req.body.searchData;
    const places = req.body.places;
    const averageDuration = req.body.averageDuration;
    const link_id = req.body.link_id || nanoid.nanoid();
    if(origins && origins.length >= 2 && searchData && places && averageDuration){
        Sharelink.updateOne({link_id: link_id},{
            link_id: link_id,
            origins: origins,
            searchData: searchData, 
            places: places, 
            averageDuration: averageDuration
        }, {upsert: true},(e, shared)=>{
            if(e){
                console.error(e);
                res.status(500);
                res.send('Internal error saving map to db.')
            }
            else{
                console.log(shared);
                res.send(link_id)
            }
        })
    }
    else {
        res.status(400);
        res.send('Invalid map data')
    }
    
})

router.get('/get', (req, res) => {
    const link_id = req.query.link_id;
    if(!link_id) {
        res.status(400);
        res.send('No query found');
    }
    else{
        Sharelink.findOne({link_id: link_id}, (e, doc)=>{
            if(e){
                console.error(e);
                res.status(500);
                res.send('Internal error retreiving map from db.')
            }
            else if(doc){
                console.log(doc);
                res.json(doc)
            }
            else {
                res.status(400);
                res.send('No map found for link.');
            }
        })
    }
})

module.exports = router;