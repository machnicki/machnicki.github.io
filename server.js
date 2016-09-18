const express = require('express');
const backend = require('./server/server.js').init
const env = require('./env.js')


if (env.SERVER_TYPE !== 'backend') {
  const app = express();

  app.use(express.static('build'))

  app.listen(env.FE_PORT, function() {
    console.log('App listenning on port', env.FE_PORT);
  })
}

if (env.SERVER_TYPE !== 'frontend') {
  backend()
}
