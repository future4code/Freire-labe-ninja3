import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  columns: auto;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #0f0801;
  color: #f5dd1a;
  width: 100%;
  box-sizing: border-box;

  .Logo {
    cursor: pointer;
  }

  #ImgLogo {
    width: 200px;
  }
`;
export const BoxMenu = styled.div`
  display: flex;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 0 15px;
  padding: 0 15px 0 0;
  margin: 0;
  p {
    margin: 0;
  }
`;

export const Li1 = styled.li`
  cursor: pointer;
  margin: 0;
  opacity: ${(props) => (props.paginaAtual === "inicio" ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

export const Li2 = styled.li`
  cursor: pointer;
  margin: 0;
  opacity: ${(props) => (props.paginaAtual === "cadastro" ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

export const Li3 = styled.li`
  cursor: pointer;
  margin: 0;
  opacity: ${(props) => (props.paginaAtual === "servicos" ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

export const Carrinho = styled.div`
  cursor: pointer;
  opacity: ${(props) => (props.paginaAtual === "carrinho" ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }
`;
