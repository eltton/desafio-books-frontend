import axios from "axios";

const connectionApi = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

export default connectionApi;
