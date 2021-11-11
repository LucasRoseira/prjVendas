const db = require("../models");
const Produtos = db.produtos;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  const produtos = {
    cod_venda: req.body.cod_venda,
    cod_produto: req.body.cod_venda,
    referencia: req.body.referencia,
    descricao: req.body.descricao,
    custo: req.body.custo,
    preco: req.body.preco,
    fornecedor: req.body.fornecedor,
    secao: req.body.secao,
    tipo: req.body.tipo,
    material: req.body.material,
    unidade: req.body.unidade
  };


  Produtos.create(produtos)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Algum erro ocorreu ao criar o produto."
    });
  });
};

exports.findOne = (req, res) => {
  const cod_produto = req.params.cod_produto;

  Produtos.findByPk(cod_produto)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Não foi possível encontrar o produto com o codigo=${cod_produto}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Erro ao encontrar o produto com codigo=" + cod_produto
    });
  });
};


exports.findAll = (req, res) => {
  const descricao = req.query.descricao;
  var condition = descricao ? { descricao: { [Op.like]: `%${descricao}%` } } : null;

  Produto.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Algum erro ocorreu ao encontrar todos produtos."
    });
  });
};


exports.update = (req, res) => {
  const cod_produto = req.params.cod_produto;

  Produto.update(req.body, {
    where: { cod_produto: cod_produto }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Produto atualizado com sucesso."
      });
    } else {
      res.send({
        message: `Não houve como alterar o produto com o cod_produto=${cod_produto}. 
        Talvez o produto não tenha sido encontrado ou req.body está vazio!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Erro ao atualizar o produto com o cod_produto=" + cod_produto
    });
  });
};

exports.delete = (req, res) => {
  const cod_produto = req.params.cod_produto;

  Produto.destroy({
    where: { cod_produto: cod_produto }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "O produto foi deletado com sucesso!"
      });
    } else {
      res.send({
        message: `Não foi possível deletar o produto codigo=${cod_produto}. Talvez o produto não tenha sido encontrado!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Não foi possível deletar o Produto com cod_produto=" + cod_produto
    });
  });
};


exports.deleteAll = (req, res) => {
  Produto.destroy({
    where: {},
    truncate: false
  })
  .then(nums => {
    res.send({ message: `${nums} Produtos deletados com sucesso!` });
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Ocorreu um erro ao deletar todos os produtos."
    });
  });
};

