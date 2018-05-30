'use strict';

const helmet = require('fastify-helmet');

const install = server => {
	server.register(helmet);
};

module.exports = { install };
