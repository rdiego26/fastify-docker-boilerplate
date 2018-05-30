const tap = require('tap');
const	request = require('supertest');
const path = require('path');
const buildFastify = require(path.resolve('src/index'));

tap.test('GET `/healthCheck` route', async (t) => {
	const fastify = buildFastify();

	t.tearDown(() => fastify.close());

	await fastify.ready();

	const response = await request(fastify.server)
		.get('/healthCheck')
		.expect(200)
		.expect('Content-Type', 'application/json; charset=utf-8');
	t.match(response.body, { result: 'I am alive!' });
	t.end();
});