require('make-promises-safe'); // installs an 'unhandledRejection' handler
const helmet = require('fastify-helmet');
const app = require('fastify')();
const healthCheckController = require('./controllers/HealthCheckController');

app.register(helmet);

app.get('/healthCheck', healthCheckController.simple);

app.listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('server listening on 3000');
});

const buildFastify = () => {
	return app;
};

module.exports = buildFastify;