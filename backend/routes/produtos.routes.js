module.exports = app => {
  const produtos = require("../controllers/produtos.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", produtos.create);

  // Retrieve all product
  router.get("/", produtos.findAll);


  // Retrieve a single product with id
  router.get("/:id", produtos.findOne);

  // Update a product with id
  router.put("/:id", produtos.update);

  // Delete a product with id
  router.delete("/:id", produtos.delete);

  // Delete all product
  router.delete("/", produtos.deleteAll);

  app.use('/api/produtos', router);
};