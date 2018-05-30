'use strict';

const makeLogger = color => {
	const logger = require('debug')('App:http');
	logger.color = color;
	return logger;
};

const install = server => {
	server.decorateRequest('logger', {
		info: makeLogger(4),
		trace: makeLogger(7),
		error: makeLogger(1),
		warn: makeLogger(3),
		log: makeLogger(2)
	});
};

module.exports = { install };