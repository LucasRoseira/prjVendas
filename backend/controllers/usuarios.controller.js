const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const usuarios = {
    cod_usuario: req.body.cod_usuario,
    nome: req.body.nome,
    usuario: req.body.usuario,
    senha: req.body.senha,
    loja: req.body.loja,
    status: req.body.status ? req.body.status : false
  });
};

Usuarios.create(usuarios)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Erro enquanto o usuario estava sendo cadastrado."
  });
});
};

exports.findOne = (req, res) => {
  const cod_usuario = req.params.cod_usuario;

  Usuarios.findByPk(cod_usuario)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Erro ao encontrar o usuario com o id=${cod_usuario}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Erro ao retonar todos os usuarios codigo=" + cod_usuario
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
      err.message || "Algum erro ocorreu ao retornar os usuarios."
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
      err.message || "Some error occurred while retrieving tutorials."
    });
  });
};