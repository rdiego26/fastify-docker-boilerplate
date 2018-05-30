'use strict';

const plugins = [
	require('./helmet'),
	require('./logger'),
	require('./routes')
];

const installPlugins = server => {
	plugins.forEach(({ install }) => {
		install(server);
	});
};

module.exports = { installPlugins };
