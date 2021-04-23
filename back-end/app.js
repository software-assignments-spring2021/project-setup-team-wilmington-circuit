const express = require('express');
const app = express();
const api = require('./api');
const sharelink = require('./sharelink');
const group = require('./group')
const db = require('./db');
const bodyParser = require('body-parser')
const Group = require("./models/Group");

db.connect()

app.use(express.static('public'));


app.use('/api', api);

app.use('/sharelink', sharelink);
app.use('/group', group)

app.get('/', (req, res) => {
  res.send('MeetMe App')
});



module.exports = app;