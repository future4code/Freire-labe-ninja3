import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat";
  min-height: 80vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1280px) {
    height: 74.3vh;
  }
  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  .imageContainer {
    display: flex;
    width: 100%;
  }
  #ImgInicial {
    display: flex;
    align-items: center;
    width: 45%;
    margin: auto;
  }

  .BotoesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 5%;
    justify-content: center;
  }

  #servicos {
    width: 290px;
    left: 0px;
    top: 0px;
    border-radius: 12px;
    background-color: #f5dd1a;
    color: #32142a bold;
    font-size: 24px;
    cursor: pointer;
    border: none;
    margin: 5px 5px;
    padding: 10px 0;
  }

  #contratar {
    width: 290px;
    left: 0px;
    top: 0px;
    border-radius: 12px;
    background-color: #f5dd1a;
    color: #32142a bold;
    font-size: 24px;
    cursor: pointer;
    border: none;
    margin: 5px 5px;
    padding: 10px 0;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .Container {
      flex-direction: column;
      display: block;
      height: 70vh;
    }

    .imageContainer {
      flex-direction: column;
      display: block;
      height: 38vh;
      margin-top: 20%;
      width: 100%;
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
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
      .Container {
        flex-direction: column;
        display: block;
        height: 70vh;
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
        width: 50%;
        margin-top: 5%;
      }
      @media screen and (min-device-width: 801px) and (max-device-width: 1280px) {
        .Container {
          flex-direction: column;
          display: block;
          height: 74vh;
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
  }
`;
