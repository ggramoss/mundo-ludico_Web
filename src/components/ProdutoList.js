import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);
  const [meta, setMeta] = useState({}); // Para gerenciar a paginação (se necessário).

  useEffect(() => {
    axios.get('http://localhost:1337/api/products')
      .then(response => {
        setProdutos(response.data.data); // Acesse o array de produtos dentro de "data"
        setMeta(response.data.meta); // Acesse os metadados (como paginação)
      })
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.attributes.Name}</td>
              <td>{produto.attributes.Description}</td>
              <td>{produto.attributes.Price}</td>
              <td>{produto.attributes.Quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoList;
