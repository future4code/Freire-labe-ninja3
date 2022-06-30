import React from "react";
import { Container, Box, BoxProduto, ContainerItens, BoxCarrinho, BoxProdutos, BoxInfoCarrinhio } from "./style";
import { MdOutlineDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import Swal from "sweetalert2";

export default class PaginaCarrinho extends React.Component {

    state = {
        itensCarrinho: [
            { id: 1, nome: "Desenvolvedor Web", preco: "1000" },
            { id: 2, nome: "Desenvolvedor Web", preco: "1000" },
            { id: 3, nome: "Desenvolvedor Web", preco: "1000" },
        ],
        valorTotal: "",
    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem("carrinho")).length > 0) {
            this.setState({ itensCarrinho: JSON.parse(localStorage.getItem("carrinho")) })
        }
    }

    excluirDoCarrinho = (id) => {
        const itensCarrinho = this.state.itensCarrinho.filter(item => {
            return item.id !== id
        }
        )
        localStorage.setItem("carrinho", JSON.stringify(itensCarrinho));
        this.setState({ itensCarrinho: itensCarrinho })
        this.valorTotal()
    }

    valorTotal = () => {
        let valorTotal = 0;
        this.state.itensCarrinho.map(item => {
            return valorTotal = valorTotal + parseInt(item.preco)

        })
        return valorTotal
    }


    efetuarCompra = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Serviço(os) contratado(os) com sucesso!',
            showConfirmButton: true,
            timer: 4500,
            confirmButtonColor: '#F5DD1A',
        })

        this.setState({ itensCarrinho: [] })
    }


    render() {

        const renderizarCarrinho = this.state.itensCarrinho.map(item => {
            return (
                <BoxProduto key={item.id}>
                    <p>{item.nome}</p>
                    <p>R$: {item.preco}</p>
                    <div onClick={() => this.excluirDoCarrinho(item.id)}><MdOutlineDelete color="#C20330" size="45px" /></div>
                </BoxProduto>
            )
        }
        )

        const ValorTotal = () => {
            let valorTotal = 0;
            this.state.itensCarrinho.map(item => {
                return valorTotal = valorTotal + parseInt(item.preco)

            })
            return <p>Total R$: {valorTotal}</p>
        }

        return (
            <Container>
                <Box>
                    <h2 id="Carrinho">Carrinho</h2>
                    {this.state.itensCarrinho.length > 0 ?
                        (<BoxCarrinho>
                            <BoxProdutos>
                                <p id="Servicos">Serviço(os): {this.state.itensCarrinho.length}</p>
                                <ContainerItens>
                                    {renderizarCarrinho}
                                </ContainerItens>
                                <BoxInfoCarrinhio>
                                    <ValorTotal />
                                    <button onClick={this.efetuarCompra} className="Botao">Contratar Serviço(os)</button>
                                </BoxInfoCarrinhio>
                            </BoxProdutos>
                        </BoxCarrinho>)
                        : (<p>Carrinho Vazio</p>)}
                    <button onClick={() => this.props.mudarDePagina("servicos")} className="Botao" id="Margim"><RiArrowGoBackFill size="34px" />Voltar para lista de serviços</button>
                </Box>
            </Container>
        )
    }
}