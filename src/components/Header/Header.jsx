import React from "react";
import { Container, Menu, Carrinho, BoxMenu, Li1 } from "./style";
import Logo from "../../img/Logo-header.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <div
          className="Logo"
          onClick={() => this.props.mudarDePagina("inicio")}
        >
          <img id="ImgLogo" src={Logo} alt="Logo Labeninja" />
        </div>
        <BoxMenu>
          <Menu>
            <Li1 paginaAtual={this.props.paginaAtual}>
              <p onClick={() => this.props.mudarDePagina("inicio")}>
                <AiOutlineHome size="30px" />
              </p>
            </Li1>
          </Menu>
          <Carrinho
            paginaAtual={this.props.paginaAtual}
            onClick={() => this.props.mudarDePagina("carrinho")}
          >
            <AiOutlineShoppingCart size="30px" />
          </Carrinho>
        </BoxMenu>
      </Container>
    );
  }
}
