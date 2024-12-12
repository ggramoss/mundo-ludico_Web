import { useNavigate } from "react-router-dom";
import ProdutoService from "../service/ProdutoServices";
import {  useParams } from "react-router-dom";

export default function CardProduto({ produto, onDelete }) {
    const {documentId} = useParams();
    const navigate = useNavigate();

    const editarProduto = () => {
        navigate(`/edit/${produto.documentId}`); // Redireciona para a página de edição
    };

    const deletarProduto = async () => {
        if (window.confirm("Tem certeza que deseja deletar este produto?")) {
            try {
                await ProdutoService.deletarProduto(documentId);
                onDelete(produto.documentId); // Chama a função de exclusão no componente pai
                alert("Produto deletado com sucesso!");
            } catch (error) {
                console.error("Erro ao deletar produto:", error);
                alert("Erro ao deletar produto.");
            }
        }
    };

    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
                <div className="w3-container w3-center">
                    {/* Substitui com o campo de imagem se existir no objeto produto */}
                    <img
                        src={"produto1.jpg"}
                        alt={produto.Name}
                        style={{ width: "70%" }}
                    />
                    <h5>{produto.Name}</h5>
                    <p>{produto.Description}</p>
                    <h3 className="w3-blue">
                        {produto.Price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </h3>

                    {/* Botões de editar e deletar */}
                    <button onClick={editarProduto} className="w3-button w3-blue">
                        Editar
                    </button>
                    <button onClick={deletarProduto} className="w3-button w3-red">
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}
