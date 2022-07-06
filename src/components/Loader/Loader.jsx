import React from "react";
import { ImagemLoader, Container, CarregandoP } from "./style";


export default class Loader extends React.Component {
    render(){
        return(
            <Container>
            <ImagemLoader></ImagemLoader>
            <CarregandoP>Carregando...</CarregandoP>
            </Container>
        )
    }
}