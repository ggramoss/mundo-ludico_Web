import React, { useState } from 'react';
import axios from 'axios';

function ProdutoForm() {
  const [produto, setProduto] = useState({
    Name: '',
    Description: '',
    Price: '',
    Quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:1337/api/products', {
        data: produto, // Enviar no formato que o Strapi espera
      })
      .then((response) => {
        console.log('Produto criado:', response.data);
        alert('Produto adicionado com sucesso!');
        setProduto({ Name: '', Description: '', Price: '', Quantity: '' }); // Limpa o formulário
      })
      .catch((error) => {
        console.error('Erro ao adicionar produto:', error);
        alert('Erro ao adicionar o produto!');
      });
  };

  return (
    <div className="container">
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Nome do Produto
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="Name"
            value={produto.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="Description"
            name="Description"
            value={produto.Description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Preço
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            name="Price"
            value={produto.Price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">
            Quantidade
          </label>
          <input
            type="number"
            className="form-control"
            id="Quantity"
            name="Quantity"
            value={produto.Quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar Produto
        </button>
      </form>
    </div>
  );
}

export default ProdutoForm;
