import React, { Component } from "react";
import TutorialDataService from "../services/vendas.service";

export default class AddVenda extends Component {
  constructor(props) {
    super(props);

    this.saveVenda = this.saveVenda.bind(this);
    this.newVenda = this.newVenda.bind(this);

    this.state = {
      cod_venda: null,
      cod_loja: null, 
      data_venda: null, 
      hora_pedido:  null,
      valor_total:  null,
      desconto: null,
      valor_liquido: null,
      forma_pagamento: null,
      status: null,
      nome_cliente: "" ,
      cod_cliente: null,
      vendedor: "",
      modelo: "",
      cupom: null,
      chave_nfe: "",
      XML: null,
      despesas_extras: null,
      troco: null,
      comissao: null,
      status_pedido: null
    }
  };
}


saveVenda() {
  var data = {
    cod_venda: this.state.cod_venda,
    cod_loja: this.state.cod_loja,,
    data_venda: this.state.data_venda, 
    hora_pedido:  this.state.hora_pedido,
    valor_total:  this.state.valor_total,
    desconto: this.state.desconto,
    valor_liquido: this.state.valor_liquido,
    forma_pagamento: this.state.forma_pagamento,
    status: this.state.status,
    nome_cliente: this.state.nome_cliente,
    cod_cliente: this.state.cod_cliente,
    vendedor: this.state.vendedor,
    modelo: this.state.modelo,
    cupom: this.state.cupom,
    chave_nfe: this.state.chave_nfe,
    XML: this.state.XML,
    despesas_extras: this.state.despesas_extras,
    troco: this.state.troco,
    comissao: this.state.comissao,
    status_pedido: this.state.status_pedido
  };

  TutorialDataService.create(data)
  .then(response => {
    this.setState({
      cod_venda: response.data.cod_venda,
      cod_loja: response.data.cod_loja,,
      data_venda: response.data.data_venda, 
      hora_pedido:  response.data.hora_pedido,
      valor_total:  response.data.valor_total,
      desconto: response.data.desconto,
      valor_liquido: response.data.valor_liquido,
      forma_pagamento: response.data.forma_pagamento,
      status: response.data.status,
      nome_cliente: response.data.nome_cliente,
      cod_cliente: response.data.cod_cliente,
      vendedor: response.data.vendedor,
      modelo: response.data.modelo,
      cupom: response.data.cupom,
      chave_nfe: response.data.chave_nfe,
      XML: response.data.XML,
      despesas_extras: response.data.despesas_extras,
      troco: response.data.troco,
      comissao: response.data.comissao,
      status_pedido: response.data.status_pedido

      submitted: true
    });
    console.log(response.data);
  })
  .catch(e => {
    console.log(e);
  });
}

newVenda() {
  this.setState({
   cod_venda: null,
   cod_loja: null, 
   data_venda: null, 
   hora_pedido:  null,
   valor_total:  null,
   desconto: null,
   valor_liquido: null,
   forma_pagamento: null,
   status: null,
   nome_cliente: "" ,
   cod_cliente: null,
   vendedor: "",
   modelo: "",
   cupom: null,
   chave_nfe: "",
   XML: null,
   despesas_extras: null,
   troco: null,
   comissao: null,
   status_pedido: null

   submitted: false
 });
}

render() {
    // ...
}
}