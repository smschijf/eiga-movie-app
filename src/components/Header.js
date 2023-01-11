import { BrowserRouter as Router, NavLink } from "react-router-dom";

import home from "../assets/img/home-icon.svg";
import movie from "../assets/img/movie-icon.svg";
import tv from "../assets/img/tv-icon.svg";
import search from "../assets/img/search-icon.svg";
import watchlist from "../assets/img/watchlist-icon.svg";

const headerNav = [
  {
    title: "Home",
    path: "/",
    iconPath: { home }.home,
  },
  {
    title: "Search",
    path: "/search",
    iconPath: { search }.search,
  },
  {
    title: "Watchlist",
    path: "/watchlist",
    iconPath: { watchlist }.watchlist,
  },
  {
    title: "Movies",
    path: "/movie",
    iconPath: { movie }.movie,
  },
  {
    title: "TV Series",
    path: "/tv",
    iconPath: { tv }.tv,
  },
];

const Header = () => {
  return (
    <Router>
      <nav className="w-full fixed h-16 bg-gray-900 flex justify-between items-center px-9">
        <a href="/" className="text-xl text-white font-bold">
          film buddy
        </a>
        <ul className="items-center flex flex-row h-full justify-end relative ml-6 mr-auto">
          {headerNav.map((e, i) => (
            <li key={i} className="uppercase font-bold text-xs text-white">
              <NavLink to={e.path} className="flex flex-row items-center px-3">
                <img src={e.iconPath} alt={e.title} className="h-5 pr-2" />
                <span className="link link-underline link-underline-black h-6 translate-y-1">{e.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="items-center flex flex-row h-full justify-end relative">
          <img src="https://placeimg.com/640/480/people" alt="profile" className="rounded-full h-12 w-12"/>
        </div>
      </nav>
    </Router>
  );
};

export default Header;