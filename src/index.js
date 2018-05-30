require('make-promises-safe'); // installs an 'unhandledRejection' handler
const server = require('./server');
const log = require('debug')('App');
const base = require('app-module-path');
base.addPath(__dirname);

const app = server();

app.listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    log('server listening on on %o:%o', app.server.address().address, app.server.address().port);
});

const buildFastify = () => {
	return app;
};

module.exports = buildFastify;