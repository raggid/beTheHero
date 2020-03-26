const express = require('express');

const ongs = require('./controllers/OngController');
const incidents = require('./controllers/IncidentsController');
const profile = require('./controllers/ProfileController');
const session = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', session.create)

routes.get('/ongs', ongs.index);
routes.post('/ongs', ongs.create);

routes.get('/profile', profile.index);

routes.get('/incidents', incidents.index);
routes.post('/incidents', incidents.create);
routes.delete('/incidents/:id', incidents.delete);

module.exports = routes;