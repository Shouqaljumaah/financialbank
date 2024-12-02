import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com/",
});

instance.interceptors.response.use((response) => {
  return response.data;
});

//https://www.notion.so/coded-programs/React-Auth-Cheat-Sheet-6bf6100b18f74004babfebd4cc842c4a?pvs=4#66bc1ecd3bc74df9b9892c293d87fc91
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
