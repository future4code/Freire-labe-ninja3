import React from "react";
import {
  Container,
  Box,
  BoxProduto,
  ContainerItens,
  BoxCarrinho,
  BoxProdutos,
  BoxInfoCarrinhio,
  CarrinhoVazio,
  ValorLixeira
} from "./style";
import { MdOutlineDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import Swal from "sweetalert2";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


export default class PaginaCarrinho extends React.Component {
  state = {
    itensCarrinho: [],
    valorTotal: "",
  };

  componentDidMount() {
    this.setState({
      itensCarrinho: this.props.itensCarrinho,
    });
  }

  excluirDoCarrinho = (id) => {
    const itensCarrinho = this.state.itensCarrinho.filter((item) => {
      return item.id !== id;
    });
    this.setState({ itensCarrinho: itensCarrinho });
    localStorage.setItem("listaDeCompras", JSON.stringify(itensCarrinho));
    this.valorTotal();
    this.props.vendaConcluida(itensCarrinho)
  };

  valorTotal = () => {
    let valorTotal = 0;
    this.state.itensCarrinho.map((item) => {
      return (valorTotal = valorTotal + parseInt(item.preco));
    });
    return valorTotal;
  };

  efetuarCompra = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Serviço(os) contratado(os) com sucesso!",
      showConfirmButton: true,
      timer: 4500,
      confirmButtonColor: "#F5DD1A",
    });

    this.setState({ itensCarrinho: [] });
    localStorage.setItem("listaDeCompras", JSON.stringify([]));
    this.props.vendaConcluida([])
  };

  render() {
    const renderizarCarrinho = this.state.itensCarrinho.map((item) => {
      return (
        <BoxProduto key={item.id}>
          <p>{item.nome}</p>
          <ValorLixeira>
            <p>R$: {parseInt(item.valor).toFixed(2).replace('.', ',')}</p>
          <div id="btnExcluir" onClick={() => this.excluirDoCarrinho(item.id)}>
            <MdOutlineDelete color="#C20330" size="45px" />
          </div>
          </ValorLixeira>          
        </BoxProduto>
      );
    });

    const ValorTotal = () => {
      let valorTotal = 0;
      this.state.itensCarrinho.map((item) => {
        return (valorTotal = valorTotal + parseInt(item.valor));
      });
      return <p>Total R$: {valorTotal.toFixed(2).replace('.', ',')}</p>;
    };

    return (
      <Container>
        <Box>
          <h2 id="Carrinho">Carrinho</h2>
          {this.state.itensCarrinho.length > 0 ? (
            <BoxCarrinho>
              <BoxProdutos>
                <p id="Servicos">
                  Serviço(os): {this.state.itensCarrinho.length}
                </p>
                <ContainerItens>{renderizarCarrinho}</ContainerItens>
                <BoxInfoCarrinhio>
                  <ValorTotal />
                  <button onClick={this.efetuarCompra} className="Botao">
                    Contratar Serviço(os)
                  </button>
                </BoxInfoCarrinhio>
              </BoxProdutos>
            </BoxCarrinho>
          ) : (
            <CarrinhoVazio>
               <ProductionQuantityLimitsIcon sx={{ color: "#f5dd1a", fontSize: 40 }}/>
              <h4>Carrinho Vazio</h4>
            </CarrinhoVazio>
          )}
          <button
            onClick={() => this.props.mudarDePagina("servicos")}
            className="Botao"
            id="Margim"
          >
            <RiArrowGoBackFill size="20px" />
            Voltar para lista de serviços
          </button>
        </Box>
      </Container>
    );
  }
}
