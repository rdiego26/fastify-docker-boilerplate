'use strict';

const fastify = require('fastify')();

const { installPlugins } = require('./plugins');

const server = () => {
	installPlugins(fastify);
	return fastify;
};

module.exports = server;
