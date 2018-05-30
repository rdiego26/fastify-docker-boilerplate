const simple = (req, reply) => {
	return reply.send({ result: 'I am alive!' });
};

module.exports = {
	simple
};
