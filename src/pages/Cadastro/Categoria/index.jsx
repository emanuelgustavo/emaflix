import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState({});

  const handleNovaCategoria = (chave, valor) => {
    setNovaCategoria({
      ...novaCategoria,
      [chave]: valor,
    });
  };

  const handleMudancaValor = (event) => {
    handleNovaCategoria(
      event.target.getAttribute('name'),
      event.target.value,
    );
  };

  const handleAdicionaNovaCategoria = event => {
    event.preventDefault();
    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria({});
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {novaCategoria.nome || ""}
      </h1>
      <form>
        <FormField
          label={'Nome da Categoria:'}
          type={'text'}
          name={'nome'}
          value={novaCategoria.nome || ''}
          onChange={handleMudancaValor}
        />
        <FormField
          label={'Descrição da Categoria:'}
          type={'textarea'}
          name={'descricao'}
          value={novaCategoria.descricao || ''}
          onChange={handleMudancaValor}
        />
        <FormField
          label={'Cor da Categoria:'}
          type={'color'}
          name={'cor'}
          value={novaCategoria.cor || ''}
          onChange={handleMudancaValor}
        />
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
          );
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
