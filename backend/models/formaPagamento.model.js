module.exports = (sequelize, Sequelize) => {
	const FormaPagamento = sequelize.define("formaPagamento", {
		cod_forma_pagamento: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		loja: {
			type: Sequelize.INTEGER
		},
		descricao: {
			type: Sequelize.STRING
		},

	});
	return FormaPagamento;
};