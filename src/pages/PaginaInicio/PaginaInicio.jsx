import React from "react";
import { Container } from "./style";
import Imagem from "../../img/-1.png";

export default class PaginaInicio extends React.Component {
  render() {
    return (
      <Container>
        <div className="imageContainer">
          <img
            id="ImgInicial"
            src={Imagem}
            alt="Labeninja os melhores serviços estão aqui"
          />
        </div>
        <div className="BotoesContainer">
          <button
            onClick={() => this.props.mudarDePagina("cadastro")}
            id="servicos"
          >
            Quero ser um ninja
          </button>
          <button
            onClick={() => this.props.mudarDePagina("servicos")}
            id="contratar"
          >
            Contratar um serviço
          </button>
        </div>
      </Container>
    );
  }
}
