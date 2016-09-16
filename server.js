const express = require('express');
const backend = require('./server/server.js').init

const app = express();

app.use(express.static('build'))

app.listen(process.env.PORT || 5000, function() {
  console.log('App listenning on port', process.env.PORT || 5000);
})

backend()
