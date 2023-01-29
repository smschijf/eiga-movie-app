import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../api/tmdb";
import WatchListButton from "../components/WatchListButton";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  // const [watchList, setWatchList] = useState([]);

  const AddToWatchList = (movie) => {
    let currentWatchList = JSON.stringify(
      localStorage.getItem("film-buddy-favourites")
    );
    let currentWatchListConverted = JSON.parse(currentWatchList);
    // console.log(currentWatchListConverted);
    // let currentWatchListConverted = JSON.parse(currentWatchList);
    // console.log(typeof currentWatchListConverted);
    const newWatchList = [...currentWatchListConverted, movie];
    console.log(newWatchList);
    // setWatchList(newWatchList);
    localStorage.setItem("film-buddy-favourites", JSON.stringify(newWatchList));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await tmdb.get(`movie/${id}`);
        setData(res.data);
        const genres = res.data["genres"];
        console.log(res.data);
        console.log(genres);
        let genreElement = document.getElementsByClassName("genres")[0];
        genres.forEach((item) => {
          let genreName = document.createElement("span");
          genreName.innerHTML = `
          ${item.name},`;
          genreElement.appendChild(genreName);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData();

    if (localStorage.getItem("film-buddy-favourites") === null)
      localStorage.setItem("film-buddy-favourites", []);

    document.querySelector("main").style.backgroundImage = `linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
  }, [id, data.backdrop_path, data.release_date]);
  let releaseDate = new Date(`${data.release_date}`);
  let releaseYear = releaseDate.getFullYear();
  console.log(releaseYear);

  return (
    <>
      <div className="detail-container">
        <h1 className="text-6xl font-bold my-20">{data.original_title}</h1>
        <div className="w-3/4 flex flex-row space-x-4">
          <button className="py-2 px-4 bg-transparent text-white font-semibold border border-white rounded hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            <a
              href={data.homepage}
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full h-full"
            >
              Official Site
            </a>
          </button>
          <WatchListButton
            handleWatchListClick={AddToWatchList}
            data={data}
            innerText={"Add To List +"}
          />
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
