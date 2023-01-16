import MovieRow from "../components/MovieRow";

const Tv = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mt-6 text-center uppercase">TV Series</h1>
    <MovieRow url="trending/tv/week" title="Trending This Week" />
    <MovieRow url="tv/popular" title="Popular" />
    <MovieRow url="tv/top_rated" title="Top Rated" />
    </>
  )
}

export default Tv;