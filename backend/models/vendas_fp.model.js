module.exports = (sequelize, Sequelize) => {
	const VendasFP = sequelize.define("vendasFP", {
		cod_vendaFP: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		loja: {
			type: Sequelize.INTEGER
		},

		venda: {
			type: Sequelize.INTEGER
		},

		valor: {
			type: Sequelize.DOUBLE
		},

		liquido: {
			type: Sequelize.DOUBLE
		},

		data_vencimento: {
			type: Sequelize.DATE
		},

		pagamento_aprovado: {
			type: Sequelize.STRING(2)
		},

	});
	return VendasFP;
};