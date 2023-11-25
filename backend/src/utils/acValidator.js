const Joi = require("joi");

const acValidator = Joi.object({
  // id: Joi.string().required(),
  isOn: Joi.boolean().required(),
  model: Joi.string().required(),
  status: Joi.string().required(),
  timestamp: Joi.object().required(),
  lastService: Joi.date().required(),
  cost: Joi.number().required(),
  pk: Joi.number().required(),
  suhu: Joi.number().required(),
});

module.exports = acValidator;
