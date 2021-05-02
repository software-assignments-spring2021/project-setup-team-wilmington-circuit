const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Location = require("./models/Location");
const verifyToken = require('./verify')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/save", (req, res) => {
  let location = req.body.location;
  verifyToken(req.body.id_token).then(payload => {
    const userId = payload['sub'];
    try {
      const newLocation = new Location({
        location_name: location.location_name,
        origin: location.origin,
        user_id: userId,
      });
      newLocation.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    } catch (error) {
      console.log("ERROR POSTING LOCATION");
      res.status(500)
    }
  }).catch(e => {
    res.status(500);
  })
});

router.get("/get", (req, res) => {
  verifyToken(req.headers.authorization).then(payload => {
    const userId = payload['sub'];
    try {
      Location.find({user_id: userId}, (e, doc) => {
        if(e){
          res.status(500);
          res.send('Internal error retrieving locations from db')
        }
        else{
          res.json(doc)
        }

      })
    } catch(e) {
      res.status(500);
      res.send('Internal error retrieving locations from db')
    }
  }).catch(e => {
    res.status(401);
    res.send('Unauthorized user')
  })
})

router.delete("/delete", (req, res) => {
  const locationId = req.query.q
  verifyToken(req.headers.authorization).then(payload => {
    const userId = payload['sub'];
    try {
      Location.deleteOne({user_id: userId, _id: locationId}, (e, deleted) => {
        if(e){
          res.status(500);
          res.send('Internal error retrieving locations from db')
        }
        else{
          res.send('Deleted ' + deleted);
        }

      })
    } catch(e) {
      res.status(500);
      res.send('Internal error retrieving locations from db')
    }
  }).catch(e => {
    res.status(401);
    res.send('Unauthorized user')
  })
})

module.exports = router
