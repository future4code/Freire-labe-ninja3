import React from "react";
import styled from "styled-components";
import PaginaInicio from "./pages/PaginaInicio/PaginaInicio";
import PaginaCadastro from "./pages/PaginaCadastro/PaginaCadastro";
import PaginaServicos from "./pages/PaginaServicos/PaginaServicos";
import PaginaDetalhes from "./pages/PaginaDetalhes/PaginaDetalhes";
import PaginaCarrinho from "./pages/PaginaCarrinho/PaginaCarrinho";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Swal from "sweetalert2";

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
  state = {
    pagina: "inicio",
    id: "",
    quantidadeItensCarrinho: 0,
    listaDeCompras: [],
  };

  adicionarAoCarrinho = (id, nome, valor) => {
    const contemNoCarrinho = JSON.parse(
      localStorage.getItem("listaDeCompras")
    ).find((itemLista) => itemLista.id === id);
    if (contemNoCarrinho) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Item já existe no carrinho`,
        showConfirmButton: true,
        timer: 4500,
        confirmButtonColor: "#f5dd1a",
      });
    } else {
      const listaDeCompras =
        JSON.parse(localStorage.getItem("listaDeCompras")) || [];
      this.setState({
        listaDeCompras: [...listaDeCompras, { id, nome, valor }],
        quantidadeItensCarrinho: this.state.quantidadeItensCarrinho + 1,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Item adicionado com sucesso`,
        showConfirmButton: true,
        timer: 4500,
        confirmButtonColor: "#f5dd1a",
      });
    }
  };

  vendaConcluida = (listaDeCompras) => {
    this.setState({listaDeCompras: listaDeCompras})
  }

  componentDidUpdate = () => {
    localStorage.setItem(
      "listaDeCompras",
      JSON.stringify(this.state.listaDeCompras)
    );
  };

  componentDidMount = () => {
    if (localStorage.getItem("listaDeCompras")) {
      this.setState({
        listaDeCompras: JSON.parse(localStorage.getItem("listaDeCompras")),
      });
    }
    this.quantidadeItensCarrinho();
  };

  quantidadeItensCarrinho = () => {
    const localStorageCarrinho = JSON.parse(
      localStorage.getItem("carrinhoDeServicos")
    );
    if (localStorageCarrinho) {
      this.setState({ quantidadeItensCarrinho: localStorageCarrinho.length });
    }
  };

  mudarDePagina = (pagina, id) => {
    this.setState({ pagina: pagina });
    if (id) {
      this.setState({ id: id });
    }
  };

  render() {
    const RenderizarPaginas = () => {
      switch (this.state.pagina) {
        case "inicio":
          return <PaginaInicio mudarDePagina={this.mudarDePagina} />;
        case "cadastro":
          return <PaginaCadastro mudarDePagina={this.mudarDePagina} />;
        case "servicos":
          return (
            <PaginaServicos
              mudarDePagina={this.mudarDePagina}
              adicionarAoCarrinho={this.adicionarAoCarrinho}
            />
          );
        case "detalhes":
          return (
            <PaginaDetalhes
              mudarDePagina={this.mudarDePagina}
              idDoServico={this.state.id}
              adicionarAoCarrinho={this.adicionarAoCarrinho}
            />
          );
        case "carrinho":
          return (
            <PaginaCarrinho
              itensCarrinho={this.state.listaDeCompras}
              mudarDePagina={this.mudarDePagina}
              vendaConcluida={this.vendaConcluida}
            />
          );
        default:
          return <p>Error 404 - Page Not Found</p>;
      }
    };

    return (
      <div className="App">
        <Header
          mudarDePagina={this.mudarDePagina}
          paginaAtual={this.state.pagina}
          quantidadeItensCarrinho={this.state.quantidadeItensCarrinho}
        />
        <Main>
          <RenderizarPaginas />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
