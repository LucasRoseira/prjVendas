require("./routes/vendas.routes");
require("./routes/produtos.routes");
require("./routes/usuarios.routes");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


const db = require("./models");
db.sequelize.sync();


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to lucassss application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app => {
 const vendas = require("../controllers/vendas.controller.js");
 const produtos = require("../controllers/produtos.controller.js");
 const formaPagamento = require("../controllers/formaPagamento.controller.js");
 const vendas_fp = require("../controllers/vendas_fp.controller.js");
 const clientes = require("../controllers/clientes.controller.js");
 const usuarios = require("../controllers/usuarios.controller.js");
 const estoque = require("../controllers/estoque.controller.js");

 var router = require("express").Router();

  // Create a new Vendas
 router.post("/", vendas.create);

  // Retrieve all vendas
 router.get("/", vendas.findAll);

  // Retrieve all published vendas
 router.get("/published", vendas.findAllApproved);

  // Retrieve a single Vendas with id
 router.get("/:id", vendas.findOne);

 app.use('/api/vendas', router);



 // Create a new Produto
 router.post("/", produtos.create);

  // Retrieve all produtos
 router.get("/", produtos.findAll);


  // Retrieve a single Produto with id
 router.get("/:id", produtos.findOne);

  // Update a Produto with id
 router.put("/:id", produtos.update);

  // Delete a Produto with id
 router.delete("/:id", produtos.delete);

  // Delete all produtos
 router.delete("/", produtos.deleteAll);

 app.use('/api/produtos', router);


};

