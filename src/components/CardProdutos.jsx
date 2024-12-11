import { useNavigate } from "react-router-dom";

export default function CardProduto({ produto }) {
    const navigate = useNavigate();

    const editarProduto = () => {
        navigate(`/edit/${produto.id}`); // Redireciona para a página de edição
    };

    return (
        <div
            className="w3-col l4 m6 s12 w3-container w3-padding-16"
            onClick={editarProduto}
        >
            <div className="w3-card">
                <div className="w3-container w3-center">
                    {/* Substitui com o campo de imagem se existir no objeto produto */}
                    <img
                        src={produto.imagem || "https://via.placeholder.com/150"}
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
                </div>
            </div>
        </div>
    );
}
