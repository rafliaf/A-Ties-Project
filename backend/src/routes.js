const express = require('express');
const { getAllData, getRoomById, getSumReport } = require('./handler');

const routes = express.Router();

// routes and handler
routes.get('/rooms', getAllData);
routes.get('/rooms/:id', getRoomById)
routes.get('/report/', getSumReport)

module.exports = routes;