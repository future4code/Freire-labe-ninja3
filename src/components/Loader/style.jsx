import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  align-self: center;
  text-align: center;
  grid-column: 1 / span 3;
`;

export const ImagemLoader = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 4rem;
  border-radius: 50%;
  border: 0.7rem solid rgb(240 245 120 / 30%);
  border-top-color: #f5dd1a;
  animation: 1.5s spin infinite linear;
  border-bottom-color: #f5dd1a;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CarregandoP = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: -56px;
`;
