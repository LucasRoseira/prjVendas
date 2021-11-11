import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class VendalsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchVenda = this.onChangeSearchVenda.bind(this);
    this.retrieveVenda = this.retrieveVenda.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.searchVenda = this.searchVenda.bind(this);

    this.state = {
      vendas: [],
      currentVenda: null,
      currentIndex: -1,
      searchVenda: 1
    };
  }

  componentDidMount() {
    this.retrieveVendas();
  }

  onChangeSearchVenda(e) {
    const searchVenda = e.target.value;

    this.setState({
      searchVenda: searchVenda
    });
  }

  retrieveVendas() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          vendas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveVendas();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveVenda(venda, index) {
    this.setState({
      currentVenda: venda,
      currentIndex: index
    });
  }


  searchVenda() {
    VendaDataService.findByVenda(this.state.searchVenda)
      .then(response => {
        this.setState({
          vendas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    // ...
  }
}