const httpStatus = require("http-status");
const Response = require("../model/Response");
const Room = require("../model/Room");
const AC = require("../model/AC");
const roomValidator = require("../utils/roomValidator");

// GET ROOM
const getRooms = async (req, res) => {
  let response = null;
  try {
    const rooms = await Room.find().populate({
      path: "acs",
      populate: {
        path: "report",
      },
    });

    response = new Response.Success(false, null, rooms);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const getRoomById = async (req, res) => {
  let response = null;
  try {
    const room = await Room.findOne({ _id: req.params.id }).populate("acs");

    response = new Response.Success(false, null, room);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// POST ROOM
const addRooms = async (req, res) => {
  let response = null;
  try {
    const { acs, namaRuangan, suhuRuangan } = await roomValidator.validateAsync(req.body);

    let acResults = await AC.find({ _id: { $in: acs } });

    let room = await Room.findOne({ namaRuangan });
    if (room) {
      response = new Response.Error(true, "Ruangan sudah ada!");
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    room = new Room({
      acs: acResults,
      namaRuangan,
      suhuRuangan,
    });

    const roomSave = await room.save();
    response = new Response.Success(false, null, roomSave);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// UPDATE ROOM
const updateRoom = async (req, res) => {
  let response = null;
  const errorMessages = "Room not found!";
  try {
    const findRoom = await Room.findByIdAndUpdate(req.query.id, req.body);
    await roomValidator.validateAsync(req.body);
    if (!findRoom) {
      response = new Response.Error(true, errorMessages);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }
    findRoom.save();
    const room = await Room.findOne({ _id: findRoom._id });
    response = new Response.Success(false, null, room);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const deleteRoom = async (req, res) => {
  let response = null;
  const notFoundId = "Room ID not found!";
  try {
    const deleteRoom = await Room.findByIdAndDelete(req.query.id);
    if (!deleteRoom) {
      response = new Response.Error(true, notFoundId);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }
    message = "Delete room success!";
    response = new Response.Success(false, message, null);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getRooms, getRoomById, addRooms, updateRoom, deleteRoom };
