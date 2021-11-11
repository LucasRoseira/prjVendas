module.exports = (sequelize, Sequelize) => {
  const Produtos = sequelize.define("produto", {

    cod_produto:{
      type: Sequelize.INTEGER,
      primaryKey: true
    },

    referencia: {
      type: Sequelize.STRING
    },

    descricao: {
      type: Sequelize.STRING
    },

    custo: {
      type: Sequelize.DOUBLE
    },

    preco: {
      type: Sequelize.DOUBLE
    },

    fornecedor: {
      type: Sequelize.STRING(50)
    },

    secao: {
      type: Sequelize.INTEGER
    },

    tipo: {
      type: Sequelize.INTEGER
    },

    material: {
      type: Sequelize.INTEGER
    },

    unidade: {
      type: Sequelize.INTEGER
    },
  });

  return Produtos;
};