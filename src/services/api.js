import axios from "axios";

const connectionApi = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

export default connectionApi;

// Documentação: https://books.ioasys.com.br/api/docs/
// Servidor: https://books.ioasys.com.br/api/v1
// Usuário de Teste: desafio@ioasys.com.br
// Senha de Teste: 12341234
