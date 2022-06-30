import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat";
  .Container {
    display: flex;
    width: 100%;
    height: 100%;
    font-family: Montserrat;
    max-height: 80vh;
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
    width: 100%;
    margin-bottom: 9.5%;
    justify-content: center;
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

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .Container {
      flex-direction: column;
      display: block;
    }

    .imageContainer {
      flex-direction: column;
      display: block;
    }

    .BotoesContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10% 0;
    }

    .ImgInicial {
      width: 100%;
    }

    .imageContainer {
      margin-top: 20%;
      width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
      .Container {
        flex-direction: column;
        display: block;
      }

      .imageContainer {
        flex-direction: column;
        display: flex;
        margin-top: 20%;
      }

      .BotoesContainer {
        flex-direction: column;
        display: flex;
        align-items: center;
        gap: 10%;
      }

      .ImgInicial {
        width: 100%;
      }

      .imageContainer {
        width: 100%;
        margin-top: 10%;
      }
    }
  }
`;
