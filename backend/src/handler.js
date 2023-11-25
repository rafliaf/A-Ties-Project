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
  // res.send("Mengambil Semua Catatan");
  const [id, idAc] = Object.values(req.params).map(it => {
    return Number(it);
  })

  data.forEach(it => {
    if(it.id === id) {
      it.ac.forEach(itAc => {
        if(itAc.id === idAc) {
          res.send(itAc.notes)
        }
      })
    }
  })
};

exports.getAllTimestamps = (req, res) => {
  // res.send("Mengambil Semua Timestamps");
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

  data.push()
}

// Menambah catatan
exports.addNotes = (req, res) => {
  // res.send("Menambah Catatan");
  const [id, idAc] = Object.values(req.params).map(it => {
    return Number(it);
  })

  let newNotes = []
  data.forEach(it => {
    if(it.id === id){
      it.ac.forEach(itAc => {
        if(itAc.id === idAc){
          newNotes = itAc.notes
          newNotes.push(req.body)
          const response = res.send({
            status: 'Berhasil',
            message: 'Berhasil menambah catatan!',
          });
          return response;
        } 
        // else {
        //   console.log("gagal");
          // const response = res.send({
          //   status: 'Gagal',
          //   message: 'Gagal menambah catatan, id tidak ditemukan!',
          // });
          // response.status(400);
          // return response;
        // } 
      })
    }
  })
};

// Mengambil catatan by ID
exports.getNotesById = (req, res) => {
  // res.send("Mengambil catatan berdasarkan ID");
  const [id, idAc,idNote] = Object.values(req.params).map(it => {
    return Number(it);
  })

  data.forEach(it => {
    if(it.id === id) {
      it.ac.forEach(itAc => {
        if(itAc.id === idAc) {
          res.send(itAc.notes[idNote-1])
        }
      })
    }
  })
};

//Mengubah data AC
exports.updateAC = (req, res) => {
  res.send("Update Data AC berdasarkan ID");
};

// Menghapus data AC
exports.deleteAC = (req, res) => {
  // res.send("Data berhasil di hapus");
  const [id, idAc] = Object.values(req.params).map(it => {
    return Number(it);
  })

  data.forEach(it => {
    if(it.id === id){
      it.ac.splice(idAc-1,1)
      const response = res.send({
        status: 'Berhasil',
        message: 'Berhasil menghapus data AC!',
      });
      return response;
    } 
  })
  // res.send(data)
};

