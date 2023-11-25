const Joi = require("joi");

const maintenanceValidator = Joi.object({
  tanggal: Joi.string().required(),
  ruangan: Joi.string().required(),
  tipeAC: Joi.string().required(),
  perbaikan: Joi.string().required(),
  catatan: Joi.string().required(),
});

module.exports = maintenanceValidator;
