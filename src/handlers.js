const path = require('path');
const healthCheckController = require(path.resolve('src/controllers/HealthCheckController'));

const opts = {
	schema: {
		response: {
			'2xx': {
				type: 'object',
				properties: {
					result: {
						type: 'string'
					}
				}
			}
		}
	}
};

const handlers = {
	apply: (app) => {
		app.get('/healthCheck', opts, healthCheckController.simple);
	}
};

module.exports = handlers;
