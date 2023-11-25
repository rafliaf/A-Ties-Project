const httpStatus = require("http-status");
const Response = require("../model/Response");
const AC = require("../model/AC");
const Report = require("../model/Report");
const acValidator = require("../utils/acValidator");

// GET AC
const getAC = async (req, res) => {
  let response = null;
  try {
    let ac = await AC.find().populate("report");
    response = new Response.Success(false, null, ac);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// GET AC by ID
const getACById = async (req, res) => {
  let response = null;
  try {
    const ac = await AC.findOne({ _id: req.params.id }).populate("report");

    response = new Response.Success(false, null, ac);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// POST AC
const addAC = async (req, res) => {
  let response = null;
  try {
    const { isOn, model, status, timestamp, lastService, cost, pk, suhu } = await acValidator.validateAsync(req.body);

    const ac = new AC({
      isOn,
      model,
      status,
      timestamp,
      lastService,
      cost,
      pk,
      suhu,
    });

    const acSave = await ac.save();
    response = new Response.Success(false, null, acSave);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// UPDATE AC
const updateAC = async (req, res) => {
  let response = null;

  const errorMessages = "AC not found!";
  try {
    const findAC = await AC.findByIdAndUpdate(req.query.id, req.body);
    await acValidator.validateAsync(req.body);
    if (!findAC) {
      response = new Response.Error(true, errorMessages);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }
    findAC.save();
    const ac = await AC.findOne({ _id: findAC._id });
    response = new Response.Success(false, null, ac);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// DELETE AC
const deleteAC = async (req, res) => {
  let response = null;
  const notFoundId = "AC ID not found!";
  try {
    const deleteAC = await AC.findByIdAndDelete(req.query.id);
    if (!deleteAC) {
      response = new Response.Error(true, notFoundId);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }
    message = "Delete AC success!";
    response = new Response.Success(false, message, null);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getAC, getACById, addAC, updateAC, deleteAC };
