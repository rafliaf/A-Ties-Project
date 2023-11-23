const data = require("./data/data");
const { getSumCost } = require("./functions");

data.forEach((it) => {
  if (it.id === 1) {
    console.log(it);
    it.name = "Ruang Dosen";
    console.log(it);
  }
});

exports.getAllData = (req, res) => {
  res.send(data);
};

exports.getRoomById = (req, res) => {
  const id = Number(req.params.id);

  const response = data.filter((it) => {
    return it.id === id;
  });

  res.send(response);
};

exports.getSumReport = (req, res) => {
  const sumCost = getSumCost(data);

  res.send({ total: sumCost });
};

// Mengambil semua catatan
exports.getAllNotes = (req, res) => {
  res.send("Mengambil Semua Catatan");
};

// Menambah catatan
exports.addNotes = (req, res) => {
  res.send("Menambah Catatan");
};

// Mengambil catatan by ID
exports.getNotesById = (req, res) => {
  res.send("Mengambil catatan berdasarkan ID");
};

//Mengubah data AC
exports.updateAC = (req, res) => {
  res.send("Update Data AC berdasarkan ID");
};

// Menghapus data AC
exports.deleteAC = (req, res) => {
  res.send("Data berhasil di hapus");
};
