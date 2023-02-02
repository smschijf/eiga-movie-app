import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Detail from "./pages/Detail";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="text-white pt-16 px-9">
        <Router>
          <Routes>
            <Route path="/movie-app/search" element={<Search />} />
            <Route path="/movie-app/watchlist" element={<Watchlist />} />
            <Route path="/movie-app/movies" element={<Movies />} />
            <Route path="/movie-app/tv" element={<Tv />} />
            <Route path="/movie-app/:id" element={<Detail />} />
            <Route path="/movie-app" element={<Home />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
