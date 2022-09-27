import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat";
  width: 100%;
  min-height: 80vh;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 15px 0;
  @media (max-width: 1300px) {
    min-height: 79.7vh;
  }
`;

export const Box = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0 0 0 / 0.45);
  border-radius: 12px;
  padding: 25px 0 0;

  @media (max-width: 1000px) {
    width: 90%;
  }

  p {
    font-style: normal;
    font-weight: 700;
    line-height: 39px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 801px) {
      font-size: 24px;
    }

    @media (max-width: 401px) {
      font-size: 24px;
    }
  }

  #Carrinho {
    margin: 26px 0px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    color: #32142a;
  }

  .Botao {
    font-style: normal;
    font-weight: 700;
    color: #32142a;
    border: none;
    background: #f5dd1a;
    border-radius: 12px;
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 45px;
  }

  #Margim {
    margin: 45px 40px;

    @media (max-width: 801px) {
      font-size: 18px;
      margin: 10px auto;
    }

    @media (max-width: 401px) {
      font-size: 16px;
    }
  }
`;
export const BoxProduto = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.25);
  height: 90px;
  margin: 16px 16px;
  padding: 0 18px;
  justify-content: space-between;
  border-radius: 12px;
  @media (max-width: 400px) {
    height: 100%;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #32142a;

    @media (max-width: 801px) {
      font-size: 18px;
    }

    @media (max-width: 801px) {
      font-size: 20px;
      line-height: 22px;
    }

    @media (max-width: 401px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  #btnExcluir {
    cursor: pointer;
    opacity: 0.8;
    :hover {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

export const ValorLixeira = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxCarrinho = styled.div`
  width: 100%;

  p {
    margin: 0;
    margin-right: 20px;
  }
`;

export const BoxProdutos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  #Servicos {
    justify-content: flex-start;
    margin-left: 20px;
    font-size: 18px;
  }
`;

export const ContainerItens = styled.div`
  width: 100%;
`;

export const BoxInfoCarrinhio = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 18px;

  @media (max-width: 801px) {
    padding: 0 18px;
    flex-direction: column;
    align-items: center;

    .Botao {
      margin-top: 20px;
      font-size: 18px;
    }
  }

  @media (max-width: 401px) {
    .Botao {
      font-size: 16px;
    }
  }
`;

export const CarrinhoVazio = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
