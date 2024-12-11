import axios from "axios";

const BASE_URL = "http://localhost:1337/api/products";

async function listarProdutos() {
    const response = await axios.get(BASE_URL);
    // Retorna os produtos e os metadados de paginação
    return {
        produtos: response.data.data, // Array de produtos
        meta: response.data.meta, // Metadados de paginação
    };
}

async function inserirProduto(produto) {
    const response = await axios.post(BASE_URL, {
        data: produto, // Envia os dados no formato esperado pelo Strapi
    });
    return response.data;
}

async function buscarProduto(id) {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data.data; // Retorna apenas os dados do produto
}

async function atualizarProduto(id, produto) {
    const response = await axios.put(`${BASE_URL}/${id}`, {
        data: produto, // Envia os dados no formato esperado pelo Strapi
    });
    return response.data;
}

async function deletarProduto(id) {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
}

export default {
    listarProdutos,
    inserirProduto,
    buscarProduto,
    atualizarProduto,
    deletarProduto,
};
