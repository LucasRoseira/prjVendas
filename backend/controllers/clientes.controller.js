const db = require("../models");
const Clientes = db.clientes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if (!req.body.cod_cliente) {
    res.status(400).send({
      message: "O conteudo não pode estar vazio!"
    });
    return;
  }

  const clientes = {
    cod_cliente: req.body.cod_venda,
    data_nascimento: req.body.data_nascimento,
    sexo: req.body.sexo,
    cpf: req.body.cpf,
    rg: req.body.rg,
    nome: req.body.nome,
    codigo_endereco: req.body.codigo_endereco,
    codigo_contato: req.body.codigo_contato,
    pontuacao_serasa: req.body.pontuacao_serasa,
    status: req.body.status ? req.body.status : false
  });
};

Clientes.create(clientes)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Erro enquanto o cliente estava sendo cadastrado."
  });
});
};

exports.findOne = (req, res) => {
  const cod_cliente = req.params.cod_cliente;

  Clientes.findByPk(cod_cliente)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Erro ao encontrar o cliente com o codigo=${cod_cliente}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Erro ao retonar o cliente de codigo=" + cod_cliente
    });
  });
};


exports.findAll = (req, res) => {
  const status = req.query.status;
  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

  Cliente.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Algum erro ocorreu ao retornar todos os clientes."
    });
  });
};


exports.findAllApproved = (req, res) => {
  Cliente.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Algum erro ocorreu ao retornar todos os clientes."
    });
  });
};