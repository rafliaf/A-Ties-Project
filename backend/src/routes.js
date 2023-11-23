const express = require("express");
const handler = require("./handler");

const routes = express.Router();

// routes and handler ruangan
routes.get("/rooms", handler.getAllData);
routes.get("/rooms/:id", handler.getRoomById);
routes.get("/report/", handler.getSumReport);

routes.get('/ruangan/:id/ac/:idAc', handler.getAllTimestamps);

// CATATAN LAPORAN
// menambah catatan laporan
routes.post("/notes", handler.postNote);

// mengambil semua catatan laporan
routes.get("/notes", handler.getAllNotes);

// mengambil catatan by ID
routes.get("/notes/:id", handler.getNotesById);

// AC
// mengubah data AC by ID
routes.put("/ac/:id", handler.updateAC);

// menghapus data AC pada suatu ruangan
routes.delete("/ac", handler.deleteAC);

module.exports = routes;
