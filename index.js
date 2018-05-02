require('make-promises-safe'); // installs an 'unhandledRejection' handler
const fastify = require('fastify')();
const healthCheckController = require('./src/controllers/HealthCheckController');

fastify.get('/healthCheck', healthCheckController.simple);

fastify.listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
});
