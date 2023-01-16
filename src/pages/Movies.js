import MovieRow from "../components/MovieRow";

const Movies = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mt-6 text-center uppercase">Movies</h1>
    <MovieRow url="trending/movie/week" title="Trending This Week" />
    <MovieRow url="movie/popular" title="Popular" />
    <MovieRow url="movie/top_rated" title="Top Rated" />
    </>
  )
}

export default Movies;