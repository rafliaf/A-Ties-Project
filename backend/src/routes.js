const express = require('express');
const { getAllData, getRoomById, getSumReport } = require('./handler');

const routes = express.Router();

// routes and handler
routes.get('/room', getAllData);
routes.get('/room/:id', getRoomById)
routes.get('/report/', getSumReport)

module.exports = routes;