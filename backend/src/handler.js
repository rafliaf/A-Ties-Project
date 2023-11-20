const data = require('./data/data');
const {getSumCost} = require('./functions');

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
    const sumCost = getSumCost(data)

    res.send({total: sumCost});
};
