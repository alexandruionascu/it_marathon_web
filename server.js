'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});


server.register(Inert, (err) => {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'public'),
        listing: true
      }
    }
  });

  server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);

  });

});
