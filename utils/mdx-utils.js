import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');

    // Adicionando log para depuração
    console.log('Dados recebidos da API:', data);

    // Verifica se os dados existem e os retorna
    return data ? data : [];
  } catch (error) {
    // Em caso de erro, exibe a mensagem de erro no console
    console.error('Erro ao buscar os posts:', error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/post?id=eq.${id}`);

    console.log('Post específico recebido:', data);

    return data[0] || {}; // Retorna o primeiro item do array ou um objeto vazio
  } catch (error) {
    console.error('Erro ao buscar o post específico:', error);
    return {};
  }
};