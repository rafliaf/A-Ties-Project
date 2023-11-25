const express = require("express");
const roomController = require("../controller/roomController");

const router = new express.Router();

// GET ROOM
router.get("/", roomController.getRooms);

// GET ROOM By ID
router.get("/:id", roomController.getRoomById);

// POST ROOM
router.post("/", roomController.addRooms);

// UPDATE ROOM
router.put("/update", roomController.updateRoom);

// DELETE ROOM
router.delete("/delete", roomController.deleteRoom);

module.exports = router;
