module.exports = app => {
  const clientes = require("../controllers/clientes.controller.js");

  var router = require("express").Router();

  // Create a new client
  router.post("/", clientes.create);

  // Retrieve all clients
  router.get("/", clientes.findAll);

  // Retrieve all actived clients
  router.get("/published", clientes.findAllPublished);

  // Retrieve a single client with id
  router.get("/:id", clientes.findOne);

  // Update a client with id
  router.put("/:id", clientes.update);

  // Delete a client with id
  router.delete("/:id", clientes.delete);

  // Delete all clientes
  router.delete("/", clientes.deleteAll);

  app.use('/api/clientes', router);
};