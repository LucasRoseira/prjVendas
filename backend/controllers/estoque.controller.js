const db = require("../models");
const Estoque = db.estoque;
const Op = op.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  const estoque = {
    id: req.body.id,
    cod_produto: req.body.cod_produto,
    loja: req.body.loja,
    dimensoes: req.body.dimensoes,
    cor: req.body.cor,
    quantidade: req.body.quantidade,
    data_movimentacao: req.body.data_movimentacao,
    codigodebarra: req.body.codigodebarra
  });
};

Estoque.create(estoque)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Some error occurred while creating the Estoque."
  });
});
};

exports.findOne = (req, res) => {
  const cod_estoque = req.params.cod_estoque;

  Estoque.findByPk(cod_estoque)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Não foi possível encontrar o estoque de codigo =${cod_estoque}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Erro ao retonar a estoque de codigo =" + cod_estoque
    });
  });
};


exports.findAll = (req, res) => {
  const status = req.query.status;
  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

  Estoque.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Ocorreu algum erro ao retornar o estoque."
    });
  });
};

