const db = require("../models");
const Vendas = db.vendas;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

  if (!req.body.cod_venda) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  const vendas = {
    cod_venda: req.body.cod_venda,
    cod_loja: req.body.cod_loja,
    data_venda: req.body.data_venda,
    hora_pedcod_vendao: req.body.hora_pedcod_vendao,
    valor_total: req.body.valor_total,
    desconto: req.body.desconto,
    valor_liqucod_vendao: req.body.valor_liqucod_vendao,
    forma_pagamento: req.body.forma_pagamento,
    status: req.body.status,
    nome_cliente: req.body.nome_cliente ,
    cod_cliente: req.body.cod_cliente,
    vendedor: req.body.vendedor,
    modelo: req.body.modelo,
    cupom: req.body.cupom,
    chave_nfe: req.body.chave_nfe,
    XML: req.body.XML,
    despesas_extras: req.body.despesas_extras,
    troco: req.body.troco,
    comissao: req.body.comissao,
    status_pedcod_vendao: req.body.status_pedcod_vendao ? req.body.status_pedcod_vendao : false
  });
};

Vendas.create(vendas)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Some error occurred while creating the Venda."
  });
});
};

exports.findOne = (req, res) => {
  const cod_venda = req.params.cod_venda;

  Vendas.findByPk(cod_venda)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Não foi possível encontrar a venda com o codigo =${cod_venda}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Erro ao retonar a venda com o codigo =" + cod_venda
    });
  });
};


exports.findAll = (req, res) => {
  const status = req.query.status;
  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

  Venda.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Ocorreu algum erro ao retornar as vendas."
    });
  });
};


exports.findAllApproved = (req, res) => {
  Venda.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Ocorreu algum erro ao retornar as vendas."
    });
  });
};