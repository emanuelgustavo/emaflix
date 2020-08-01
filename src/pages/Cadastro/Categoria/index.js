import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState({});

  const handleMudancaValor = event => {
    handleNovaCategoria(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  const handleNovaCategoria = (chave, valor) => {
    setNovaCategoria({
      ...novaCategoria,
      [chave]: valor
    });
  }

  const handleAdicionaNovaCategoria = event => {
    event.preventDefault();
    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria({});
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {novaCategoria.nome || ""}</h1>
      <form>
        <FormField
          label={'Nome da Categoria:'}
          type={'text'}
          name={'nome'}
          value={novaCategoria.nome || ''}
          onChange={handleMudancaValor}
        />
        {false &&
          <label>Nome da Categoria:
          <input
              type="text"
              value={novaCategoria.nome || ""}
              name="nome"
              onChange={handleMudancaValor}
            />
          </label>
        }
        <label>Descrição da Categoria:
          <textarea
            type="text"
            value={novaCategoria.descricao || ""}
            name="descricao"
            onChange={event => handleMudancaValor(event)}
          />
        </label>
        <label>Cor da Categoria:
          <input
            type="color"
            value={novaCategoria.cor || ""}
            name="cor"
            onChange={event => handleMudancaValor(event)}
          />
        </label>
        <button
          onClick={event => handleAdicionaNovaCategoria(event)}
        >
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria.nome}${index}`}>
              {JSON.stringify(categoria)}
            </li>
          )
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria;