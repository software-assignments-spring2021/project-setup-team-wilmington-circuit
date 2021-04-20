const express = require('express');
const app = express();
const api = require('./api');
const sharelink = require('./sharelink');
const db = require('./db');

db.connect()

app.use(express.static('public'));

app.use('/api', api);

app.use('/sharelink', sharelink);

app.get('/', (req, res) => {
  res.send('MeetMe App')
});

module.exports = app;


