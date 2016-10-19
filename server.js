'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }
  // Add the route
  server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
        return reply('hello world');
    }
  });

  server.route({
       method: 'GET',
       path: '/',
       handler: function (request, reply) {
           reply.file('./Views/index.html');
       }
   });

  // Start the server
  server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);

  });

});
