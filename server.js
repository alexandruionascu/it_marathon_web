const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');




var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');
 

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});


server.register(Inert, (err) => {
  if (err) {
    throw err;
  }
  
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'public'),
        listing: true,
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/login',
      handler: function (request, reply) {
      reply.file('public/login.html')
    }
  });

  server.route({
    method: 'GET',
    path: '/events',
    handler: function (request, reply) {
        bucket.get('events', function(err, result) {
          if (err) throw err;
          reply(result.value);
        });
    } 
  });

  server.start((serverError) => {
    if (serverError) {
      throw serverError;
    }
    console.log('Server running at:', server.info.uri);
  });
});
