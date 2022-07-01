import { Container, CssTextField, Tela } from "./style";
import Axios from "axios";
import React from "react";
import { labeninjasURL } from "../../constants/labeninjasAPI";
import Swal from "sweetalert2";
import Switch from "@mui/material/Switch";
import { FaCcPaypal } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineBarcode } from "react-icons/ai";
import PixIcon from "@mui/icons-material/Pix";
import { GrFormAdd } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";

const headers = {
  headers: {
    Authorization: "99e00f76-6043-47b1-a160-8d6452fb1a91",
  },
};

export default class PaginaCadastro extends React.Component {
  state = {
    title: "",
    description: "",
    dueDate: "",
    price: "",
    menthods: [
      { name: "Cartão", icon: <BsCreditCard2Back size={"38px"} /> },
      { name: "PayPal", icon: <FaCcPaypal size={"38px"} /> },
      { name: "Pix", icon: <PixIcon fontSize={"large"} /> },
      { name: "Boleto", icon: <AiOutlineBarcode size={"38px"} /> },
    ],
    paymentMethods: [],
  };

  onChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  onChangedescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  onChangedueDate = (event) => {
    this.setState({
      dueDate: event.target.value,
    });
  };
  onChangeprice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };
  onChangepaymentMethods = (name) => {
    let selected = this.state.paymentMethods;
    let find = selected.indexOf(name);

    if (find > -1) {
      selected.splice(find, 1);
    } else {
      selected.push(name);
    }
    this.setState({ selected });
    console.log(selected);
  };

  createJob = () => {
    const url = `${labeninjasURL}/jobs`;
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate,
    };

    Axios.post(url, body, headers)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.data.message}: ${body.title}`,
          showConfirmButton: true,
          timer: 4500,
          confirmButtonColor: "#f5dd1a",
        });
        this.setState({
          title: "",
          description: "",
          dueDate: "",
          price: "",
          paymentMethods: [],
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Serviço não foi cadastrado, Preencha todos os campos",
          showConfirmButton: true,
          timer: 4500,
          confirmButtonColor: "red",
        });
      });
  };

  render() {
    const checkBoxespaymentMethods = this.state.menthods.map(
      (paymentMethods) => {
        return (
          <li key={paymentMethods.name}>
            <label className="pagamentos">
              <Switch
                color="primary"
                type="checkbox"
                name="metodo"
                onChange={() =>
                  this.onChangepaymentMethods(paymentMethods.name)
                }
                selected={this.state.paymentMethods.includes(
                  paymentMethods.name
                )}
              ></Switch>
              <span className="icone">{paymentMethods.icon}</span>
            </label>
          </li>
        );
      }
    );

    return (
      <Tela>
        <Container>
          <h2>Cadastro de serviço</h2>
          <div>
            <CssTextField
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChangetitle}
              id="outlined-basic"
              label="Serviço"
              variant="outlined"
            />

            <CssTextField
              name="description"
              cols="20"
              rows="3"
              value={this.state.description}
              onChange={this.onChangedescription}
              id="outlined-basic"
              label="Descrição"
              variant="outlined"
            ></CssTextField>

            <CssTextField
              type="number"
              name="price"
              placeholder="R$"
              min="0"
              value={this.state.price}
              onChange={this.onChangeprice}
              id="outlined-basic"
              label="Preço"
              variant="outlined"
            />
            <CssTextField
              type="date"
              name="dueDate"
              value={this.state.dueDate}
              onChange={this.onChangedueDate}
              id="outlined-basic"
              label=""
              variant="outlined"
            />

            <h4>Formas de pagamento:</h4>
            <div className="pay">{checkBoxespaymentMethods}</div>
          </div>
          <div className="botoes">
            <button
              onClick={() => {
                this.props.mudarDePagina("inicio");
              }}
            >
              {" "}
              Voltar <RiArrowGoBackFill />
            </button>
            <button onClick={this.createJob}>
              Cadastrar <GrFormAdd />
            </button>
          </div>
        </Container>
      </Tela>
    );
  }
}
