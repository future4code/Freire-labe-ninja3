import React from "react";
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Container, Detalhes, Botoes } from "./style";
import { labeninjasURL, key } from "../../constants/labeninjasAPI";
import PaginaCarrinho from "../PaginaCarrinho/PaginaCarrinho";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default class PaginaDetalhes extends React.Component {
  state = {
    servico: [],
    pagamentos: [],
    data: "",
  };

  componentDidMount = () => {
    this.getJobById();
  };

  getJobById = async (id) => {
    try {
      const response = await axios.get(
        `${labeninjasURL}/jobs/${this.props.idDoServico}`,
        {
          headers: { Authorization: key },
        }
      );
      this.setState({
        servico: response.data,
        pagamentos: response.data.paymentMethods,
        data: response.data.dueDate,
      });
    } catch (error) {}
  };

  adicionarCarrinho = () => {
    <PaginaCarrinho
      nome={this.state.servico.title}
      preco={this.state.servico.price}
    />;
  };

  render() {
    const formasPagamento = this.state.pagamentos.join(", ");

    return (
      <Container>
        <Detalhes>
          <h2>{this.state.servico.title}</h2>
          <p>{this.state.servico.description}</p>
          <h3>Disponível até</h3>
          <p>
            {this.state.data.substring(0, 10).split("-").reverse().join("/")}
          </p>
          <h3>Formas de Pagamento:</h3>
          <p>{formasPagamento}</p>
          <p>Valor: R$ {this.state.servico.price}</p>
          <Botoes>
            <button onClick={() => this.props.mudarDePagina("servicos")}>
              <RiArrowGoBackFill />
              Voltar para lista de serviços
            </button>
            <button onClick={() => this.props.adicionarAoCarrinho(this.props.idDoServico, this.state.servico.title, this.state.servico.price)}>
              <MdOutlineAddShoppingCart />
              Adicionar
            </button>
          </Botoes>
        </Detalhes>
      </Container>
    );
  }
}
