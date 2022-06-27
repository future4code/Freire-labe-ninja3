import React from "react";
import { Container, Menu, Carrinho, BoxMenu, Li1, Li2, Li3 } from "./style";



export default class Header extends React.Component {
    render() {
        return (
            <Container>
                <div className="Logo" onClick={() => this.props.mudarDePagina("inicio")} >LabeNinja</div>
                <BoxMenu>
                    <Menu>
                        <Li1 paginaAtual={this.props.paginaAtual}><p onClick={() => this.props.mudarDePagina("inicio")}>Inicio</p></Li1>
                        <Li2 paginaAtual={this.props.paginaAtual}><p onClick={() => this.props.mudarDePagina("cadastro")}>Cadastrar Serviço</p></Li2>
                        <Li3 paginaAtual={this.props.paginaAtual}><p onClick={() => this.props.mudarDePagina("servicos")}>Contratar Serviço</p></Li3>
                    </Menu>
                    <Carrinho paginaAtual={this.props.paginaAtual} onClick={() => this.props.mudarDePagina("carrinho")}>Carrinho</Carrinho>
                </BoxMenu>
            </Container>
        )
    }
}