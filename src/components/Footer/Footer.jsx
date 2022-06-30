import React from "react";
import { Container } from "./style";
import { Menu } from "./style";
import Rodape from "../../img/Logo-rodape.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <div className="footer">
          <h2>LABENINJA</h2>
        
        </div>
        <div className="RedeSociais">
          <Menu>
            <a href="https://www.facebook.com" target="_blank">
              {" "}
              <BsFacebook size="23px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://twitter.com" target="_blank">
              {" "}
              <BsTwitter size="23px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://instagram.com" target="_blank">
              {" "}
              <BsInstagram size="23px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://www.gmail.com" target="_blank">
              {" "}
              <AiOutlineMail size="23px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://web.whatsapp.com" target="_blank">
              {" "}
              <BsWhatsapp size="23px" color="#f5dd1a" />{" "}
            </a>
          </Menu>
          <p> @2022 Alguns direitos reservados.</p>
        </div>
      </Container>
    );
  }
}
