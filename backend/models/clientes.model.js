module.exports = (sequelize, Sequelize) => {
  const Clientes = sequelize.define("cliente", {

    cod_cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },

    data_nascimento: {
      type: Sequelize.DATE
    },

    nome: {
      type: Sequelize.STRING(50)
    },

    sexo: {
      type: Sequelize.STRING(2)
    },

    cpf: {
      type: Sequelize.STRING(50)
    },

    rg: {
      type: Sequelize.STRING(50)
    },

    codigo_endereco: {
      type: Sequelize.INTEGER
    },

    codigo_contato: {
      type: Sequelize.INTEGER
    },

    pontuacao_serasa: {
      type: Sequelize.INTEGER
    },

    status: {
      type: Sequelize.INTEGER
    }
  });

  return Clientes;
};