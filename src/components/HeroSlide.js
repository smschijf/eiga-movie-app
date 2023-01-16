import { useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import tmdb from "../api/tmdb";

const HeroSlide = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await tmdb.get("trending/all/day");
        setMovies(res.data.results.slice(0, 10));
        // console.log(res.data.results);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay
      loop
    >
      {movies.map((item, i) => {
        return (
          <SwiperSlide key={i} className="hero-slide">
            <a href={`/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={item.original_title ? item.original_title : item.original_name}
            />
            <span className="absolute top-3/4 left-16 z-10 text-xl font-bold">
              {item.original_title ? item.original_title : item.original_name}
            </span>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlide;
