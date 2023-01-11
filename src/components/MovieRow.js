import { useState, useEffect } from "react";

import tmdb from "../api/tmdb";

const MovieRow = (type) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        console.log(type);
        const res = await tmdb.get(`movie/${type.type}`);
        setMovies(res.data.results);
        console.log(res.data.results);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);
};

export default MovieRow;
