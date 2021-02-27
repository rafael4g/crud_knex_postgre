const express = require('express');
const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');
const routes = express.Router();

routes
  // Users
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  // Projects
  .get('/projects', ProjectController.index)  

module.exports = routes;