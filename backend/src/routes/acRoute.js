const express = require("express");
const acController = require("../controller/acController");
// const uploadController = require("../controller/uploadController");

const router = new express.Router();

// GET AC
router.get("/", acController.getAC);

// GET AC by ID
router.get("/:id", acController.getACById);

// POST AC
router.post("/", acController.addAC);

// UPDATE AC
router.put("/update", acController.updateAC);

// DELETE AC
router.delete("/delete", acController.deleteAC);

module.exports = router;
