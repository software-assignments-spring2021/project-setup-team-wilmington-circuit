const express = require('express');
const app = express();
const api = require('./api')

app.use('/api', api)

app.get('/', (req, res) => {
  res.send('MeetMe App')
});

module.exports = app;


