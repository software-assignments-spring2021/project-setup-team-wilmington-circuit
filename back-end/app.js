const express = require('express');
const app = express();
const api = require('./api');
const sharelink = require('./sharelink');
const group = require('./group');
const location = require('./location');
const db = require('./db');
const path = require('path')
const bodyParser = require('body-parser')
const Group = require("./models/Group");

db.connect()

app.use(express.static('public'));
app.use(express.static(path.join(...[__dirname,'..', 'front-end', 'build'])))

app.use('/api', api);

app.use('/sharelink', sharelink);
app.use('/group', group);
app.use('/location', location)

app.get('/', (req, res) => {
  res.sendFile(path.join(...[__dirname,'..', 'front-end', 'build', 'index.html']));
});



module.exports = app;