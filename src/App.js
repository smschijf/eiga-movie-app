import Header from './components/Header';
import HeroSlide from './components/HeroSlide';
import MovieRow from './components/MovieRow';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="text-white pt-16 px-9">
      <HeroSlide />
      <MovieRow type="upcoming"/>
      </main>
    </div>
  );
}

export default App;
