import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px;
  border: 1px solid black;
  width: 50vw;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 12px;

  

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  h2 , h4{
    border-bottom:1px solid #f5dd1a;
  }

  .pay {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 5px;
  }
  #outlined-basic {
    width: 30vw;
    gap: 10px;
  }

  .botoes {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }

  .pagamentos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    gap: 8px;
    background-color: #f5dd1a;
    border: none;
    width: 150px;
    border-radius: 5px;
    padding: 8px 16px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width:90vw;

        #outlined-basic {
    width: 70vw;
    gap: 10px;
  }

        

    
}
`

 
