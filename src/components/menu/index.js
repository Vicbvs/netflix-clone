import React from "./../../../node_modules/react";
import logo from "./../../assets/img/logo.png";
import "./menu.css";
import Button from "./../button/index";

function Menu() {
  return (
    <nav className="menu">
      <a href="/">
        <img className="logo" src={logo} alt="Netflix Logo" />
      </a>
      <Button as="a" className="buttonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
