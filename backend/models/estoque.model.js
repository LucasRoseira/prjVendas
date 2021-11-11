module.exports = (sequelize, Sequelize) => {
	const Estoque = sequelize.define("estoque" , {

		id : {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		cod_produto: {
			type: Sequelize.INTEGER
		},
		loja: {
			type: Sequelize.INTEGER
		},
		dimensoes: {
			type: Sequelize.STRING(50)
		},
		cor: {
			type: Sequelize.STRING(35)
		},
		quantidade: {
			type: Sequelize.INTEGER
		},
		data_movimentacao: {
			type: Sequelize.DATE
		},
		codigodebarra: {
			type: Sequelize.INTEGER
		}

	});
	return Estoque;
};