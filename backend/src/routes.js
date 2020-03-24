const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');

routes.get('/ongs', OngController.getOngs)
routes.post('/ongs', OngController.postOng)

module.exports = routes;