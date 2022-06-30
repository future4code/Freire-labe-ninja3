import styled from "styled-components";

export const Container = styled.footer`
  font-family:"Montserrat";
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #0f0801;
  width: 100%;
  box-sizing: border-box;
  color: #f5dd1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0px;

    #RedeSociais {
    height: 10px;
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 0 15px;
  padding: 0 15px 0 0;
  justify-content: center;
  
  color: #f5dd1a;
  p {
    margin: 0;
  }
`;
