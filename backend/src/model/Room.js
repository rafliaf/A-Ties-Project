const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  namaRuangan: {
    type: String,
    required: true,
  },
  suhuRuangan: {
    type: Number,
    required: true,
  },
  acs: [{ type: Schema.Types.ObjectId, ref: "AC" }],
});

const Room = model("Room", roomSchema);

module.exports = Room;
