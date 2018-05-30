const Joi = require('joi');

const validate = rule => ({
	schema: rule,
	schemaCompiler: schema => data => Joi.validate(data, schema)
});

module.exports = validate;
