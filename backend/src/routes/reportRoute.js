const express = require("express");
const reportController = require("../controller/reportController");

const router = new express.Router();

// GET REPORT
router.get("/", reportController.getReport);

// GET REPORT By ID
router.get("/:id", reportController.getReportByID);

// POST REPORT
router.post("/", reportController.addReport);

// UPDATE REPORT By ID
router.put("/update", reportController.updateReport);

// DELETE REPORT By ID
router.delete("/delete", reportController.deleteReport);

module.exports = router;
