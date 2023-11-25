const Joi = require("joi");

const reportValidator = Joi.object({
  // id: Joi.string().required(),
  ac_id: Joi.string().required(),
  tanggal: Joi.date().required(),
  riwayat: Joi.string().required(),
  catatan: Joi.string().required(),
});

module.exports = reportValidator;
