import { useState } from "react";
import ProdutoService from "../service/ProdutoServices"; // Certifique-se de que o ProdutoService está implementado.

export default function FormProdutos() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const cadastrarProduto = (event) => {
        event.preventDefault();
        ProdutoService.inserirProduto({
            Name: name,
            Description: description,
            Price: parseFloat(price),
            Quantity: parseInt(quantity),
        }).then((produto) => {
            alert("Produto criado com sucesso!");
            console.log("Produto", produto);
            setName("");
            setDescription("");
            setPrice(0);
            setQuantity(0);
        });
    };

    return (
        <form onSubmit={cadastrarProduto}>
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
        </form>
    );
}
