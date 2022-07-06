import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Tela = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  border: 1px solid black;
  width: 50vw;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  font-family: "Montserrat";

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
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
    cursor: pointer;
    box-shadow: 3px 3px #3f3f3c16;
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
    cursor: pointer;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #f5dd1a;
    font-family: "Montserrat";
    border: none;
    width: 130px;
    border-radius: 5px;
    padding: 8px 16px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }

  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
    color: #f5dd1a;
  }
  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
    + .MuiSwitch-track {
    background-color: #0a090a;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90vw;

    #outlined-basic {
      width: 70vw;

      gap: 10px;
    }
  }
`;

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0F0801",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0F0801",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none",
    },
    "&:hover fieldset": {
      borderColor: "none",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0F0801",
    },
  },
});
