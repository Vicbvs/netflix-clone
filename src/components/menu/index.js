import React from "./../../../node_modules/react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import "./menu.css";
import Button from "./../button/index";

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={logo} alt="Netflix Logo" />
      </Link>
      <Button as={Link} className="buttonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
