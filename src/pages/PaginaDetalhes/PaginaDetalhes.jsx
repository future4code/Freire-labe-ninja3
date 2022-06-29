import React from "react";
import axios from "axios";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Detalhes, Botoes } from "./style";
import { labeninjasURL, key } from "../../constants/labeninjasAPI";
import mudarDePagina from "../../App";
import PaginaCarrinho from "../PaginaCarrinho/PaginaCarrinho";
// id para testes = c249defe-bde3-4bf1-a06d-110bcefcd470
export default class PaginaDetalhes extends React.Component {
  state = {
    servico: [],
    pagamentos: [],
    data: "",
  };

  componentDidMount = () => {
    this.getJobById();
  };

  //   getJobs = async () => {
  //     try {
  //       const response = await axios.get(`${labeninjasURL}/jobs`, {
  //         headers: { Authorization: key },
  //       });
  //         this.setState({ servico: response.data });
  //     } catch (error) {
  //       console.log("houve um erro:", error.response.data);
  //     }
  //   };

  getJobById = async (id) => {
    try {
      const response = await axios.get(
        `${labeninjasURL}/jobs/c249defe-bde3-4bf1-a06d-110bcefcd470`,
        {
          headers: { Authorization: key },
        }
      );
      this.setState({
        servico: response.data,
        pagamentos: response.data.paymentMethods,
        data: response.data.dueDate,
      });
      console.log(this.state.servico);
    } catch (error) {}
  };

  adicionarCarrinho = () => {
    <PaginaCarrinho
      nome={this.state.servico.title}
      preco={this.state.servico.price}
    />;
  };

  // id = "c249defe-bde3-4bf1-a06d-110bcefcd470";
  // id2 = "250ce4b4-83d3-402b-a304-6c9b9a9329e9"
  render() {
    const formasPagamento = this.state.pagamentos.join(", ");

    return (
      <Container>
        <Header />
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
            <button onClick={this.adicionarCarrinho}>
              <BsFillCartPlusFill />
              Adicionar
            </button>
          </Botoes>
        </Detalhes>
        <Footer />
      </Container>
    );
  }
}
