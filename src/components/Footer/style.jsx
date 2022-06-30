import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #0f0801;
  height: 10%;
  color: #f5dd1a;
  display: flex;
  flex-direction: column;
  align-items: center;

  #ImgFooter {
    width: 200px;
    display: flex;
  }

  #RedeSociais {
    height: 20px;
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 0 15px;
  padding: 0 15px 0 0;
  margin: 0;
  color: #f5dd1a;
  p {
    margin: 0;
  }
`;
