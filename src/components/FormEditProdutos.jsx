import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProdutoService from "../service/ProdutoServices"; // Certifique-se de que o ProdutoService está implementado.

export default function FormEditProdutos() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        ProdutoService.buscarProduto(id).then((produto) => {
            console.log("Produto", produto);
            setName(produto.Name);
            setDescription(produto.Description);
            setPrice(parseFloat(produto.Price));
            setQuantity(produto.Quantity);
        });
    }, [id]);

    const editarProduto = (event) => {
        event.preventDefault();
        ProdutoService.atualizarProduto(id, {
            Name: name,
            Description: description,
            Price: parseFloat(price),
            Quantity: parseInt(quantity),
        }).then((produto) => {
            alert("Produto atualizado com sucesso!");
            console.log("Produto", produto);
            navigate(-1); // Voltar para a página anterior após a atualização.
        });
    };

    const voltar = () => {
        navigate(-1);
    };

    return (
        <form onSubmit={editarProduto}>
            <label>Nome:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
            />
            <br />
            <label>Descrição:</label>
            <textarea
                name="description"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
            />
            <br />
            <label>Preço:</label>
            <input
                type="number"
                name="price"
                value={price}
                onChange={(ev) => setPrice(ev.target.value)}
            />
            <br />
            <label>Quantidade:</label>
            <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(ev) => setQuantity(ev.target.value)}
            />
            <br />
            <input type="submit" value="Salvar" />
            <input type="button" value="Voltar" onClick={voltar} />
        </form>
    );
}
