import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wmklgydjgingusqilzxo.supabase.co/rest/v1',
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta2xneWRqZ2luZ3VzcWlsenhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MTUwMDAsImV4cCI6MjA0NTM5MTAwMH0.O8AaKkRQolx_n8ltvbI7Q7Zl_bas4SoprNA-RgWJcow",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta2xneWRqZ2luZ3VzcWlsenhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MTUwMDAsImV4cCI6MjA0NTM5MTAwMH0.O8AaKkRQolx_n8ltvbI7Q7Zl_bas4SoprNA-RgWJcow"
  }
});

// Função para buscar os posts
export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts?select=id');
    console.log('Resposta da API:', data);
    
    if (data && data.length > 0) {
      return data;
    } else {
      console.warn('Nenhum post encontrado.');
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar os posts:', error.response ? error.response.data : error.message);
    return [];
  }
};
