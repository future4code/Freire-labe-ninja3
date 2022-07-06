import React from "react";
import { Container } from "./style";
import { Menu } from "./style";
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
          <h3>LABENINJA</h3>
          </div>
        <div className="RedeSociais">
          <Menu>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              {" "}
              <BsFacebook size="18px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              {" "}
              <BsTwitter size="18px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              {" "}
              <BsInstagram size="18px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
              {" "}
              <AiOutlineMail size="18px" color="#f5dd1a" />{" "}
            </a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
              {" "}
              <BsWhatsapp size="18px" color="#f5dd1a" />{" "}
            </a>
          </Menu>
          
        </div>
        <p> @2022 Alguns direitos reservados.</p>
      </Container>
    );
  }
}
