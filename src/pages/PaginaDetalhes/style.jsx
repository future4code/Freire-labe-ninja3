import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat";
  height: 80vh;
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  max-width: 1280px;
  @media (max-width: 800px) {
    height: 74vh;
  }
`;

export const Detalhes = styled.div`
  width: 90%;
  min-width: 600px;
  padding: 15px;
  margin: auto;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  text-align: center;
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
  }
  p {
    margin: 16px;
  }
  @media (max-width: 1000px) {
    margin: auto;
    width: 80vw;
    min-width: 250px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    display: flex;
    gap: 8px;
    height: 45px;
    background-color: #f5dd1a;
    border: none;
    border-radius: 12px;
    padding: 8px 16px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`;
