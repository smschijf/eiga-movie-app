import HeroSlide from "../components/HeroSlide";
import MovieRow from "../components/MovieRow";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <MovieRow url="trending/movie/day" title="Trending Movies" />
      <MovieRow url="trending/tv/day" title="Trending Series" />
      <MovieRow url="movie/top_rated" title="Top Rated Movies" />
      <MovieRow url="tv/top_rated" title="Top Rated Series" />
    </>
  );
};

export default Home;
