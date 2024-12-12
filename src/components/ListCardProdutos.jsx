import React, { useState, useEffect } from "react";
import CardProduto from "./CardProdutos";
import ProdutoService from "../service/ProdutoServices";

export default function ListCardProdutos() {
    const [listarProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        ProdutoService.listarProdutos().then((response) => {
            const produtos = response.produtos;
            if (Array.isArray(produtos)) {
                setListaProdutos(produtos);
            } else {
                console.error('A resposta não contém um array de produtos:', produtos);
            }
        }).catch((error) => {
            console.error('Erro ao buscar produtos:', error);
        });
    }, []);

    // Função para excluir um produto
    const handleDelete = (produtoId) => {
        setListaProdutos(listarProdutos.filter(produto => produto.documentId !== produtoId));
    };

    return (
        <div>
            {listarProdutos.map(produto => (
                <CardProduto
                    key={produto.documentId}
                    produto={produto}
                    onDelete={handleDelete} // Passa a função de exclusão
                />
            ))}
        </div>
    );
}
