import logo from './logo.svg';
import './App.css';

import $ from 'jquery';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, Col, Row, Card} from "react-bootstrap";

function myFunction() {
  $("navbar-toggler").click(function(){
    $("navbarSupportedContent").show();
  });
}


function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <img src={logo} className="App-logo" alt="logo" /> 

       <a class="navbar-brand" href="#">Vendas</a>
       <button class="navbar-toggler" type="button" onclick="myFunction()" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Consultas</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cadastros
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

        </ul>

        <div class="float-direita">
          <form class="pesquisa-direita">
            <div class="row">
              <div class="col-md-10">
                <input class="form-control " type="search" placeholder="Pesquisar" aria-label="Search"></input>
              </div>

              <div class="col-md-2">
                <button class="btn btn-outline-info" type="submit">Pesquisar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <header className="App-header">
      <p class="mt-2">
        Cadastro de Vendas
      </p>
    </header>

    <main class="container">
      <Form>
        <Row className="mt-2 mb-2">
          <Form.Group as={Col} md="4" controlId="formGridNvenda">
            <Form.Label>Nº Venda</Form.Label>
            <Form.Control type="numbera" placeholder="1" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridVendedor">
            <Form.Label>Vendedor</Form.Label>
            <Form.Select defaultValue="Escolha...">
              <option>Escolha...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-2" controlId="formGridCliente">
          <Form.Label>Cliente</Form.Label>
          <Form.Control placeholder="" defaultValue="João da Silva [CPF: 431.604.718-99]" />
        </Form.Group>

        <Card body>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridProduto">
              <Form.Label>Produto</Form.Label>
              <Form.Control defaultValue="12345678"/>
            </Form.Group>
          </Row>

          <Button variant="success mb-2" type="submit" controlId="adicionaProduto">
            Adicionar
          </Button>
          <Button variant="danger" type="submit" controlId="excluiProduto">
            Excluir
          </Button>
          <div class="mt-2 right">
            <Form.Group as={Col} md='2' controlId="formGridDescontoReais">
              <Form.Control  placeholder="R$">
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md='2' controlId="formGridDescontoPorcentagem">
              <Form.Control  placeholder="%">
              </Form.Control>
            </Form.Group>
            <Col md='5'> 
              <Button   variant="success mb-2" type="submit" controlId="btnDescontoItem">
                Desconto no Item
              </Button>
              <Button   variant="success mb-2" type="submit" controlId="btnDescontoTotal">
                Desconto Total
              </Button>
            </Col>
          </div>

          <table class="table table-dark mt-2" controlId="tableProdutos">
            <thead>
              <tr>
                <th scope="col">Código de barras</th>
                <th scope="col">Referência</th>
                <th scope="col">Descrição</th>
                <th scope="col">Qtd</th>
                <th scope="col">Unidade</th>
                <th scope="col">Valor</th>
                <th scope="col">Desconto</th>
                <th scope="col">Liquido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">12345678</td>
                <td>AUHAU.5454.LJKH.5458</td>
                <td>Aparelho</td>  
                <td>2</td>
                <td>2</td>
                <td>250,00</td>
                <td>15,00</td>
                <td>235,00</td>

              </tr>
              <tr>
                <td scope="row">12345678</td>
                <td>AUHAU.5454.LJKH.5458</td>
                <td>Aparelho</td>  
                <td>3</td>
                <td>4</td>
                <td>250,00</td>
                <td>15,00</td>
                <td>235,00</td>
              </tr>
              <tr>
                <td scope="row">12345678</td>
                <td>AUHAU.5454.LJKH.5458</td>
                <td>Aparelho</td> 
                <td>4</td>
                <td>2</td>
                <td>250,00</td>
                <td>15,00</td>
                <td>235,00</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Form>

      <Card>
        <Card.Header>Forma de pagamento</Card.Header>
        <Card.Body>
          <Row className="mt-2 mb-2">
            <Form.Group as={Col} md='2' controlId="formGridPassword">
              <Form.Select defaultValue="Escolha...">
                <option>Escolha...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md='1' controlId="formGridPassword">
              <Form.Select defaultValue="1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md='2' controlId="formGridPassword">
              <Form.Control  placeholder="R$">
              </Form.Control>
            </Form.Group>
            <Col md='2'> 
              <Button   variant="success mb-2" type="submit">
                Adicionar
              </Button>
            </Col>
          </Row>
          <table class="table table-dark mt-2"  md="4">
            <thead>
              <tr>
                <th scope="col">Forma</th>
                <th scope="col">Parcela</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Maestro</td>
                <td>1</td>
                <td>352,50</td>
              </tr>
              <tr>
                <td scope="row">Maestro</td>
                <td>2</td>
                <td>352,50</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Resumo</Card.Header>
        <Card.Body>
          <Row className="mb-2">
            <table class="table table-dark table-modify mt-2"  md="4">
              <thead>
                <tr>
                  <th scope="col">Qtd Itens</th>
                  <th scope="col">Valor Total Bruto</th>
                  <th scope="col">Desconto Nos Itens</th>
                  <th scope="col">Desconto no Total</th>
                  <th scope="col">Valor Total Líquido</th>
                  <th scope="col">Troco</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">9</td>
                  <td>750,00</td>
                  <td>45,00</td>
                  <td>00,00</td>
                  <td>705,00</td>
                  <td>00,00</td>
                </tr>
              </tbody>
            </table>
            <div class="col-md-3 centralizado"> 
             <Button variant="success " size="lg" controlId="confirmaVenda">Confirmar</Button> 
           </div>
         </Row>
       </Card.Body>
     </Card>
   </main>
   </div>

   );
}

export default App;
