import { useEffect, useState } from "react";

import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const getData = async (searchTerm) => {
    const tmdb = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: "efea5faa764d7a933ff047a3f10f870e",
        query: { searchTerm },
      },
    });

    try {
      const res = tmdb.get("/search/multi");
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData("spy");
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mt-6 text-center uppercase">Search</h1>
      <form onSubmit={() => getData(search)}>
        <input
          type="search"
          placeholder="Search"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm"
        />
      </form>
    </>
  );
};

export default Search;
