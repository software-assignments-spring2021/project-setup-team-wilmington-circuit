const express = require('express');
const mongoose = require('mongoose');
const app = express();
const api = require('./api')
const bodyParser = require('body-parser')
const Group = require("./models/Group");
const db = require("./db.js");

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

app.get('/', (req, res) => {
  res.send('MeetMe App')
});

db.connect()

app.post('/savegroup', async (req, res)=>{
  res.send("savegroup");
  let group = req.body.user.group;
  console.log(group.group_name);
  //console.log(group.origins)
  console.log(req.body.user.email)
  
  let locations = group.origins.map( a => a.loc);
  
  try{
    const newGroup = new Group({
      name: group.group_name,
      locations: locations,
      userId: req.body.user.email  
      
    });
    newGroup.save(function (err) {
      if (err) {
        console.log(err)
      } else{
        console.log("success")
      }
    })
   
  } catch (error) {
    console.log("ERROR POSTING GROUP");
  }
});

module.exports = app;


