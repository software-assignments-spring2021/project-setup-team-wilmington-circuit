const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Group = require("./models/Group");
const verifyToken = require('./verify')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/save", (req, res) => {
  let group = req.body.group;
  console.log(req.body)
  verifyToken(req.body.id_token).then(payload => {
    const userId = payload['sub'];
    try {
      const newGroup = new Group({
        group_name: group.group_name,
        origins: group.origins,
        user_id: userId,
      });
      newGroup.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    } catch (error) {
      console.log("ERROR POSTING GROUP");
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
      Group.find({user_id: userId}, (e, doc) => {
        if(e){
          res.status(500);
          res.send('Internal error retrieving groups from db')
        }
        else{
          res.json(doc)
        }

      })
    } catch(e) {
      res.status(500);
      res.send('Internal error retrieving groups from db')
    }
  }).catch(e => {
    res.status(401);
    res.send('Unauthorized user')
  })
})

router.delete("/delete", (req, res) => {
  const groupId = req.query.q
  verifyToken(req.headers.authorization).then(payload => {
    const userId = payload['sub'];
    try {
      Group.deleteOne({user_id: userId, _id: groupId}, (e, deleted) => {
        if(e){
          res.status(500);
          res.send('Internal error retrieving groups from db')
        }
        else{
          res.send('Deleted ' + deleted);
        }

      })
    } catch(e) {
      res.status(500);
      res.send('Internal error retrieving groups from db')
    }
  }).catch(e => {
    res.status(401);
    res.send('Unauthorized user')
  })
})

router.delete("/deleteAll", (req, res) => {
  verifyToken(req.headers.authorization).then(payload => {
    const userId = payload['sub'];
    try {
      Group.deleteMany({user_id: userId}, (e, deleted) => {
        if(e){
          res.status(500);
          res.send('Internal error retrieving groups from db')
        }
        else{
          res.send('Deleted all groups (User: ' + userId + ')');
        }

      })
    } catch(e) {
      res.status(500);
      res.send('Internal error retrieving groups from db')
    }
  }).catch(e => {
    res.status(401);
    res.send('Unauthorized user')
  })
})

router.post('/update', (req, res) => {
  const originalGroup = req.body.originalGroup;
  const newGroup = req.body.newGroup;

  verifyToken(req.body.id_token).then(payload => {
    try {
      Group.findOne({_id: originalGroup._id, user_id: originalGroup.user_id}, (err, group) => {
        if(err){
          console.log(err);
        } else {
          group.group_name = newGroup.group_name;
          group.origins = newGroup.origins;
          group.save(err=>{if(err)console.log(err)});
          res.json('Successfully updated!');
          res.status(200);
        }
      });
    } catch (error) {
      console.log("ERROR UPDATING GROUP");
      res.status(500)
    }
  }).catch(e => {
    res.status(500);
  });
});

module.exports = router
