const httpStatus = require("http-status");
const Response = require("../model/Response");
const Report = require("../model/Report");
const AC = require("../model/AC");
const reportValidator = require("../utils/reportValidator");

// GET REPORT
const getReport = async (req, res) => {
  let response = null;
  try {
    const report = await Report.find();

    response = new Response.Success(false, null, report);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// GET REPORT by ID
const getReportByID = async (req, res) => {
  let response = null;
  try {
    const report = await Report.findOne({ _id: req.params.id });

    response = new Response.Success(false, null, report);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// POST REPORT
const addReport = async (req, res) => {
  let response = null;
  try {
    const { ac_id, tanggal, riwayat, catatan } = await reportValidator.validateAsync(req.body);

    const report = new Report({
      ac_id,
      tanggal,
      riwayat,
      catatan,
    });

    let ac = await AC.findOne({ _id: ac_id });

    if (!ac) {
      response = new Response.Error(true, "AC not Found!");
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const reportSave = await report.save();
    await ac.report.push(reportSave);
    await ac.save();
    response = new Response.Success(false, null, reportSave);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// UPDATE REPORT
const updateReport = async (req, res) => {
  let response = null;

  const errorMessages = "Report not Found!";
  try {
    const findReport = await Report.findByIdAndUpdate(req.query.id, req.body);
    await reportValidator.validateAsync(req.body);
    if (!findReport) {
      response = new Response.Error(true, errorMessages);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }
    findReport.save();
    const report = await Report.findOne({ _id: findReport._id });
    response = new Response.Success(false, null, report);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// DELETE REPORT
const deleteReport = async (req, res) => {
  let response = null;
  const notFoundId = "Report ID not found!";
  try {
    const deleteReport = await Report.findByIdAndDelete(req.query.id);
    if (!deleteReport) {
      response = new Response.Error(true, notFoundId);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }
    message = "Delete Report success!";
    response = new Response.Success(false, message, null);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getReport, getReportByID, addReport, updateReport, deleteReport };
