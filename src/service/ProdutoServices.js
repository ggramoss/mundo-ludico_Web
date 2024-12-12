import axios from "axios";

const BASE_URL = "http://localhost:1337/api/products";

async function listarProdutos() {
    const response = await axios.get(BASE_URL);
    
    return {
        produtos: response.data.data, 
        
    };
}

async function inserirProduto(produto) {
    const response = await axios.post(BASE_URL, {
        data: produto, 
    });
    return response.data;
}

const buscarProduto = async (documentId) => {
    try {
        const response = await axios.get(BASE_URL+"/"+documentId);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar produto", error);
        throw error;
    }
};

async function atualizarProduto(documentId, produto) {
    const response = await axios.put(BASE_URL+"/"+documentId, {
        data: produto, 
    });
    return response.data;
}

async function deletarProduto(documentId) {
    const response = await axios.delete(`${BASE_URL}/${documentId}`);
    return response.data;
}

export default {
    listarProdutos,
    inserirProduto,
    buscarProduto,
    atualizarProduto,
    deletarProduto,
};
