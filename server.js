const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

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

  server.start((serverError) => {
    if (serverError) {
      throw serverError;
    }
    console.log('Server running at:', server.info.uri);
  });
});
