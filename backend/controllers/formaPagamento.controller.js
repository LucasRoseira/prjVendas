const db = require ("../models");
const db FormaPagamento = db.formaPagamento;
const Op = db.Sequelize.Op;


const db = require ("../models");
const db VendasFP = db.vendasFP;
const Op = db.Sequelize.Op;


exports.findOne = (req, res) => {
	const cod_forma_pagamento = req.params.cod_forma_pagamento;

	VendasFP.findByPk(id)
	.then(data => {
		if (data) {
			res.send(data);
		} else {
			res.status(404).send({
				message: `Erro ao retornar a forma de pagamento comid=${id}.`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Erro ao retornar a forma de pagamento com id=" + id
		});
	});
};


exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	VendasFP.findAll({ where: condition })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "Algum um erro ocorreu ao retornar a forma de pagamento."
		});
	});
};

);
};










