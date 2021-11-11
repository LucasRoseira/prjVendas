module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define("usuarios", {
		cod_usuario: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nome: {
			type: Sequelize.STRING(50)
		},

		usuario: {
			type: Sequelize.STRING(50)
		},

		senha: {
			type: Sequelize.STRING
		},

		loja: {
			type: Sequelize.INTEGER
		},

		status: {
			type: Sequelize.INTEGER
		}
	});
	return Usuarios;
};