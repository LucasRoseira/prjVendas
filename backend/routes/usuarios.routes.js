module.exports = app => {
  const usuarios = require("../controllers/usuarios.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", usuarios.create);

  // Retrieve all users
  router.get("/", usuarios.findAll);

  // Retrieve all actived users
  router.get("/published", usuarios.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", usuarios.findOne);

  // Update a user with id
  router.put("/:id", usuarios.update);

  // Delete a user with id
  router.delete("/:id", usuarios.delete);

  // Delete all usuarios
  router.delete("/", usuarios.deleteAll);

  app.use('/api/usuarios', router);
};