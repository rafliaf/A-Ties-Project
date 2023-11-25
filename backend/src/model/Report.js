const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  ac_id: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
  riwayat: {
    type: String,
    required: true,
  },
  catatan: {
    type: String,
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
