import React from "react";
import styled from "styled-components";
import PaginaInicio from "./pages/PaginaInicio/PaginaInicio"
import PaginaCadastro from "./pages/PaginaCadastro/PaginaCadastro"
import PaginaServicos from "./pages/PaginaServicos/PaginaServicos"
import PaginaDetalhes from "./pages/PaginaDetalhes/PaginaDetalhes"
import PaginaCarrinho from "./pages/PaginaCarrinho/PaginaCarrinho"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const Main = styled.main`
  display: flex;
  justify-content: center;
`


class App extends React.Component {

  state = {
    pagina: "inicio",
    id: "",
    quantidadeItensCarrinho: "",
  }

  componentDidMount = () => {
    this.quantidadeItensCarrinho()
  }

  quantidadeItensCarrinho = () => {
    const localStorageCarrinho = JSON.parse(localStorage.getItem("carrinhoDeServicos"))
    if (localStorageCarrinho) {
      this.setState({ quantidadeItensCarrinho: localStorageCarrinho.length })
    }
  }

  mudarDePagina = (pagina, id) => {
    this.setState({ pagina: pagina })
    if (id) {
      this.setState({ id: id })
    }
  }

  render() {

    const RenderizarPaginas = () => {
      switch (this.state.pagina) {
        case "inicio":
          return (
            <PaginaInicio mudarDePagina={this.mudarDePagina} />
          )
        case "cadastro":
          return (
            <PaginaCadastro />
          )
        case "servicos":
          return (
            <PaginaServicos />
          )
        case "detalhes":
          return (
            <PaginaDetalhes mudarDePagina={this.mudarDePagina} idDoServico={this.state.id} />
          )
        case "carrinho":
          return (
            <PaginaCarrinho />
          )
        default:
          return (
            <p>Error 404 - Page Not Found</p>
          )
      }
    }

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
