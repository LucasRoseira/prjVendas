import http from "../http-common";

class VendasDataService {
  getAll() {
    return http.get("/vendas");
  }

  get(cod_venda) {
    return http.get(`/vendas/${cod_venda}`);
  }

  create(data) {
    return http.post("/vendas", data);
  }

  update(cod_venda, data) {
    return http.put(`/vendas/${cod_venda}`, data);
  }


  findByCodigo(cod_venda) {
    return http.get(`/vendas?cod_venda=${cod_venda}`);
  }
}

export default new VendasDataService();