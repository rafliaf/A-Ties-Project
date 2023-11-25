const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema({
  tanggal: {
    type: Date,
    required: true,
  },
  ruangan: {
    type: String,
    required: true,
  },
  tipeAC: {
    type: String,
    required: true,
  },
  perbaikan: {
    type: String,
    required: true,
  },
  catatan: {
    type: String,
    required: true,
  },
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
