const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  tanggal: {
    type: Date,
    required: true,
  },
  tipeAC: {
    type: String,
    required: true,
  },
  ruangan: {
    type: String,
    required: true,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
