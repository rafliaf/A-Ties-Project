const { Schema, model } = require("mongoose");

const acSchema = new Schema({
  isOn: {
    type: Boolean,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Object,
    required: true,
  },
  lastService: {
    type: Date,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  pk: {
    type: Number,
    required: true,
  },
  suhu: {
    type: Number,
    required: true,
  },
  report: [{ type: Schema.Types.ObjectId, ref: "Report" }],
});

const AC = model("AC", acSchema);

module.exports = AC;
