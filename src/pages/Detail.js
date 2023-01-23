import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../api/tmdb";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await tmdb.get(`movie/${id}`);
        setData(res.data);
        const genres = (res.data["genres"]);
        console.log(res.data);
        console.log(genres);
        let genreElement = document.getElementsByClassName("genres")[0];
        genres.forEach((item) => {
          let genreName = document.createElement("span");
          genreName.innerHTML = `
          ${item.name}`;
          genreElement.appendChild(genreName);
          // let releaseDate = new Date(`${data.release_date}`);
          // let releaseYear = releaseDate.getFullYear();
          // console.log(releaseYear);
        })
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    
    document.querySelector("main").style.backgroundImage = `linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
  }, [id, data.backdrop_path, data.release_date]);
  // document.querySelector(
  //   ".detail-container"
  // ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
  let releaseDate = new Date(`${data.release_date}`);
  let releaseYear = releaseDate.getFullYear();
  console.log(releaseYear);

  return (
    <>
      <div className="detail-container">
        <h1 className="text-6xl font-bold my-20">{data.original_title}</h1>
        <div className="w-3/4 flex flex-row space-x-4">
          <button className="py-2 px-4 bg-transparent text-white font-semibold border border-white rounded hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            <a href={data.homepage} target="_blank" rel="noreferrer" className="inline-block w-full h-full">
              Official Site
            </a>
          </button>
          <button className="py-2 px-4 bg-transparent text-white font-semibold border border-white rounded hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Add To List +
          </button>
        </div>
        <div className="w-3/4 flex flex-row text-sm my-4">
          <span>Released in: {releaseYear}•</span>
          <span>Length: {data.runtime} min•</span>
          <span className="genres">Genres: </span>
        </div>
        <div className="w-3/4">{data.overview}</div>
      </div>
    </>
  );
};

export default Detail;
