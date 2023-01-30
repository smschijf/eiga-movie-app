import { useState, useEffect } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tmdb from "../api/tmdb";

const MovieRow = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await tmdb.get(`${props.url}`);
        setMovies(res.data.results);
        console.log(res.data.results);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, [props.url]);

  return (
    <>
      <h2 className="text-md font-bold py-6">{props.title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        slidesPerView={5}
        spaceBetween={30}
      >
        {movies.map((item, i) => {
          let movieScore = (item.vote_average).toString().slice(0,3);
          return (
            <SwiperSlide key={i} className="movie-row">
              <a href={`/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={
                    item.original_title
                      ? item.original_title
                      : item.original_name
                  }
                  className="rounded-md relative"
                />
                <div className="overlay absolute inset-0 h-full w-full opacity-0 bg-black hover:opacity-80 transition-opacity p-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">
                      {item.original_title
                        ? item.original_title
                        : item.original_name}
                    </span>
                    <span className="text-lg font-semibold">
                      {movieScore}
                    </span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MovieRow;
