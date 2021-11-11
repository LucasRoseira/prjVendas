module.exports = app => {
  const vendas = require("../controllers/vendas.controller.js");

  var router = require("express").Router();

  // Create a new Venda
  router.post("/", vendas.create);

  // Retrieve all vendas
  router.get("/", vendas.findAll);

  // Retrieve all vendas
  router.get("/published", vendas.findAllApproved);

  // Retrieve a single Venda with id
  router.get("/:id", vendas.findOne);

  // Update a Tutorial with id
  router.put("/:id", vendas.update);

  // Delete all vendas
  router.delete("/", vendas.deleteAll);

  app.use('/api/vendas', router);
};