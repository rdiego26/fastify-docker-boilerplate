require('make-promises-safe'); // installs an 'unhandledRejection' handler
const path = require('path');
const helmet = require('fastify-helmet');
const app = require('fastify')();
const triggerHandlers = require(path.resolve('src/handlers'));

app.register(helmet);
triggerHandlers.apply(app);

app.listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('server listening on 3000');
});

const buildFastify = () => {
	return app;
};

module.exports = buildFastify;