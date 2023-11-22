const express = require("express");
const handler = require("./handler");

const routes = express.Router();

// routes and handler ruangan
routes.get("/room", handler.getAllData);
routes.get("/room/:id", handler.getRoomById);
routes.get("/report/", handler.getSumReport);

// NOTES
// menambah catatan
routes.post("/notes");

// mengambil semua catatan
routes.get("/notes", handler.getAllNotes);

// mengambil catatan by ID
routes.get("/notes/:id", handler.getNotesById);

// AC
// mengubah data AC by ID
routes.put("/ac", handler.updateAC);

// menghapus data AC
routes.delete("/ac", handler.deleteAC);

module.exports = routes;
