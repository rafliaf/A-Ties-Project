const data = require("./data/data");
const { getSumCost } = require("./functions");


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

exports.getAllTimestamps = (req, res) => {
  const [id, idAc] = Object.values(req.params).map(it => {
    return Number(it);
  });

  data.forEach(it => {
    // cek ruangan yg id nya samae dengan id dari param
    if (it.id === Number(id)) {
      // cek ac yang idnya sama dengan acId dari param
      it.ac.forEach(itAc => {
        if (itAc.id === Number(idAc)) {
          res.send(itAc.timestamp)

        }
      })
    }
  });

  // kirim responsed jika tidak ada data ditemukan
  res.send({message: "Tidak ditemukn"})
}

exports.postNote = (req, res) => {
  console.log(req.body);

  data.push()
}

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
