import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/pageDefault";
import FormField from "../../../components/formField";
import Button from "../../../components/button";

function CadastroCategoria() {
  const valoresIniciais = {
    name: "",
    description: "",
    color: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(info) {
    setValue(info.target.getAttribute("name"), info.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://netflix-clone-react.herokuapp.com/categorias";
    fetch(URL).then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        setCategorias(resposta);
        return;
      }
      throw new Error("Não foi possível buscar os dados");
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.name}`}>{categoria.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
