import axios from "axios";

const apiBase = "https://api.kinopoisk.dev";

axios.defaults.transformResponse = [(data) => JSON.parse(data)];

export const movieAxios = axios.create({
  baseURL: apiBase,
  headers: {
    "X-API-KEY": process.env.REACT_APP_TOKEN
  }
});
