import styled from "styled-components";

export const Container = styled.div`
  .Container {
    display: flex;
    width: 100%;
    height: 100%;
    font-family: Montserrat;
  }

  .imageContainer {
    display: flex;
    width: 100%;
  }
  #ImgInicial {
    display: flex;
    align-items: center;
    width: 68%;
    margin-left: 15%;
  }

  .BotoesContainer {
    display: flex;
    justify-content: space-evenly;
    width: 680px;
    margin-bottom: 10%;
  }

  #servicos {
    height: 35px;
    width: 290px;
    left: 0px;
    top: 0px;
    border-radius: 12px;
    background-color: #f5dd1a;
    color: #32142a bold;
    font-size: 24px;
  }

  #contratar {
    height: 35px;
    width: 290px;
    left: 0px;
    top: 0px;
    border-radius: 12px;
    background-color: #f5dd1a;
    color: #32142a bold;
    font-size: 24px;
  }
`;
