import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;

        display: flex;
        align-items: center;
        text-align: center;

        @media(max-width: 801px){
            font-size: 24px;
        }
    }

    #Carrinho{
        font-family: 'Montserrat';
        margin: 26px 0px;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 32px;
        color: #32142A;   
    }

    .Botao{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        color: #32142A;

        border: none;
        background: #F5DD1A;
        border-radius: 12px;
        padding: 20px 100px;
        font-size: 24px;
        cursor: pointer;

        display: flex;
        align-items: center;
        
        @media(max-width: 801px){
            padding: 20px 50px;
        }

        @media(max-width: 401px){
            font-size: 20px;
        }

    }

    #Margim{
        margin: 45px 40px;
    }


`
export const BoxProduto = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.25);
    height: 90px;
    margin: 16px 16px;
    padding: 0 18px;
    justify-content: space-between;
    border-radius: 12px;

    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #32142A;

        @media(max-width: 801px){
            font-size: 18px;
        }
    }
        

    div{
        cursor: pointer;
        opacity: 0.8;
        :hover{
            opacity: 1;
            transform: scale(1.2);
        }
    }

`

export const BoxCarrinho = styled.div`
    width: 100%;

    p{
        margin: 0;
    }

`

export const BoxProdutos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    #Servicos{
        margin-left: 18px;
    }
`


export const ContainerItens = styled.div`
    width: 100%;
`

export const BoxInfoCarrinhio = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 18px;
    
    @media(max-width: 801px){
        padding: 0 18px;
        flex-direction: column;
        align-items: center;

        .Botao{
            margin-top: 20px;
        }
    }


`