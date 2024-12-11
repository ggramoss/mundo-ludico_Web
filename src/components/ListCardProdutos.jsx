import CardProduto from "./CardProdutos";
import { useState, useEffect } from "react";
import ProdutoService from "../service/ProdutoServices";

export default function ListCardProdutos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        ProdutoService.listarProdutos().then((produtos) => setListaProdutos(produtos));
    }, []);

    return (
        listaProdutos.map(produto =>
            <CardProduto key={produto.id} produto={produto} />
        )
    );
}
