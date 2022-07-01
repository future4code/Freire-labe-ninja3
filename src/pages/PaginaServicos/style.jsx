import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const ContainerFather = styled.div`
  font-family: "Montserrat";
  max-width: 1280px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 10px;
  }
  @media screen and (min-device-width: 480px) and (max-device-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 10px;
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #030303;
    border-width: 2px;
  }
  .cQWWMA
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #030303;
    border-width: 2px;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #030303;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 10px;
    margin: 0px 20px;
  }
  @media screen and (min-device-width: 480px) and (max-device-width: 1280px) {
    display: flex;
    justify-items: center;
    justify-content: space-around;
    padding: 10px;
  }
  @media (min-device-width: 1280px) {
    display: flex;
    justify-items: center;
    justify-content: space-around;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 50px auto;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  @media screen and (min-device-width: 480px) and (max-device-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BodyCards = styled.div`
  border-radius: 12px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  width: 400px;
  @media (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 80vw;
  }
  @media screen and (min-device-width: 480px) and (max-device-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
`;

export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Data = styled.p`
  text-align: center;
`;

export const Botoes = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    // flex-direction: column;
    gap: 9px;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  background-color: #f5dd1a;
  color: #0f0801;
  width: 150px;
  height: 45px;
  font-size: 16px;
  cursor: pointer;
`;
export const ButtonDelete = styled.button`
  font-family: "Montserrat";
  border: none;
  border-radius: 10px;
  background-color: #f5dd1a;
  margin-bottom: 20px;
  width: 50px;
  height: 45px;
  cursor: pointer;
`;

export const ButtonCarrinho = styled.button`
  font-family: "Montserrat";
  border: none;
  border-radius: 10px;
  background-color: #f5dd1a;
  margin-bottom: 20px;
  width: 50px;
  height: 45px;
  cursor: pointer;
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
