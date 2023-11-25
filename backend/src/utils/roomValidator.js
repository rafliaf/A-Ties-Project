const Joi = require("joi");

const roomValidator = Joi.object({
  // id: Joi.string().required(),
  acs: Joi.array().required(),
  namaRuangan: Joi.string().required(),
  suhuRuangan: Joi.number().required(),
});

module.exports = roomValidator;
