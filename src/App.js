import Header from './components/Header';

import './App.css';

function App() {
  document.querySelector("html").setAttribute("data-theme", "night")
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
