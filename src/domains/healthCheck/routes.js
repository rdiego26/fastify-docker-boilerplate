'use strict';

const middleware = require('./middlewares');

const routes = [
	{ method: 'get',
		path: '/healthCheck',
		handler: middleware.simple
	}
];

module.exports = routes;
