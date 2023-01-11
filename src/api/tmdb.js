import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "efea5faa764d7a933ff047a3f10f870e",
  },
});

export default tmdb;
