import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import CadastroVideo from "./pages/cadastro/video";
import CadastroCategoria from "./pages/cadastro/categoria";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Pagina404 = () => (
  // <>
  <div>Pagina 404</div>
  // <iframe
  //   src="https://mariosouto.com/flappy-bird-devsoutinho/"
  //   width="340"
  //   height="600"
  // ></iframe>
  // </>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
