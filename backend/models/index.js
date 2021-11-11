const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    operatorsAliases: 0,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vendas = require("./vendas.model.js")(sequelize, Sequelize);
db.produtos = require("./produtos.model.js")(sequelize, Sequelize);
db.formaPagamento = require("./formaPagamento.model.js")(sequelize, Sequelize);
db.clientes = require("./clientes.model.js")(sequelize, Sequelize);
db.usuarios = require("./usuarios.model.js")(sequelize, Sequelize);
db.vendasFP = require("./vendas_fp.model.js")(sequelize, Sequelize);
db.estoque = require("./estoque.model.js")(sequelize, Sequelize);

module.exports = db;