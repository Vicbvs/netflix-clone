import React from "./../../../node_modules/react";
import { FooterBase } from "./styles";
import logo from "./../../assets/img/logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="logo" src={logo} alt="Netflix Logo" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
