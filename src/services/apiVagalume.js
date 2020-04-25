import axios from "axios";

const apiVagalume = axios.create({
  baseURL: "https://api.vagalume.com.br",
});

export default apiVagalume;
