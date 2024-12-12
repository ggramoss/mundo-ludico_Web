import { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import ProdutoService from "../service/ProdutoServices"; // Certifique-se de que o ProdutoService está implementado.

export default function FormEditProdutos() {
    const {documentId} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        ProdutoService.buscarProduto(documentId).then((produto) => {
            console.log("Produto", produto);
            setName(produto.Name);
            setDescription(produto.Description);
            setPrice(parseFloat(produto.Price));
            setQuantity(produto.Quantity);
        });
    }, [documentId]);

    const editarProduto = (event) => {
        event.preventDefault();
        // ... (rest of the code)
      
        // Assuming documentId is available from ProdutoService.buscarProduto
        ProdutoService.atualizarProduto(documentId, {
          Name: name,
          Description: description,
          Price: parseFloat(price),
          Quantity: parseInt(quantity),
        }).then((produto) => {
          // ... (rest of the code)
        });
      };
    const voltar = () => {
        navigate(-1);
    };
    const redireciona = ()=>{
        redirect(-1);
    }

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
            <input type="submit" value="Salvar" onClick={redireciona} />
            <input type="button" value="Voltar" onClick={voltar} />
        </form>
    );
}
