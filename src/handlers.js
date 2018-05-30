const path = require('path');
const healthCheckController = require(path.resolve('src/controllers/HealthCheckController'));

const handlers = {
	apply: (app) => {
		app.get('/healthCheck', healthCheckController.simple);
	}
};

module.exports = handlers;
