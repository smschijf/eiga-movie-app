import { useState } from "react";

import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [result, setResult] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tmdb = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: "efea5faa764d7a933ff047a3f10f870e",
        query: searchQuery,
      },
    });

    try {
      const res = await tmdb
        .get("/search/multi")
        .then((response) => response.data.results);
      // setResult(res);
      console.log(res);
      var searchResults = document.getElementsByClassName("searchResults")[0];
      res.forEach((item) => {
        let movieCard = document.createElement("div");
        movieCard.classList.add("test")
        movieCard.innerHTML = (
          `<div className="hello">
            ${item.original_title ? item.original_title : item.original_name}
          </div>`
        );
        searchResults.appendChild(movieCard);
      });
      console.log(searchQuery);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold my-8 text-center uppercase">Search</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="search"
          placeholder="Search"
          required
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="text-black border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm w-96"
        />
      </form>
      <div className="searchResults grid grid-cols-6 grid-rows-3 gap-5">
        {/* {result.map(item => {
          <span>{item.id}</span>
        })} */}
      </div>
    </>
  );
};

export default Search;
