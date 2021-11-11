module.exports = (sequelize, Sequelize) => {
  const Vendas = sequelize.define("venda", {

    cod_venda:{
      type: Sequelize.INTEGER,
      primaryKey: true
    },

    cod_loja: {
      type: Sequelize.INTEGER
    },

    data_venda: {
      type: Sequelize.STRING
    },

    hora_pedido: {
      type: Sequelize.STRING
    },

    valor_total: {
      type: Sequelize.DOUBLE
    },
    desconto: {
      type: Sequelize.DOUBLE
    },

    valor_liquido: {
      type: Sequelize.DOUBLE
    },

    forma_pagamento: {
      type: Sequelize.INTEGER
    },

    status: {
      type: Sequelize.INTEGER
    },

    nome_cliente: {
      type: Sequelize.STRING(50)
    },

    cod_cliente: {
      type: Sequelize.INTEGER
    },

    vendedor: {
      type: Sequelize.STRING(50)
    },

    modelo: {
      type: Sequelize.STRING(50)
    },

    cupom: {
      type: Sequelize.INTEGER
    },

    chave_nfe: {
      type: Sequelize.STRING(50)
    },

    XML: {
      type: Sequelize.STRING
    },

    despesas_extras: {
      type: Sequelize.DOUBLE
    },

    troco: {
      type: Sequelize.DOUBLE
    },
    comissao: {
      type: Sequelize.DOUBLE
    },
    status_pedido: {
      type: Sequelize.INTEGER
    },
  });

  return Vendas;
};