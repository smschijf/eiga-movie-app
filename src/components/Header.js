import { BrowserRouter as Router, NavLink } from "react-router-dom";

import home from "../assets/img/home.svg";
import movie from "../assets/img/movie.svg";
import tv from "../assets/img/tv.svg";
import search from "../assets/img/search.svg";

const headerNav = [
  {
    title: "Home",
    path: "/",
    iconPath: {home}.home,
  },
  {
    title: "Search",
    path: "/search",
    iconPath: {search}.search,
  },
  {
    title: "Movies",
    path: "/movie",
    iconPath: {movie}.movie,
  },
  {
    title: "TV Series",
    path: "/tv",
    iconPath: {tv}.tv,
  },

];

const Header = () => {
  return (
    <Router>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {headerNav.map((e, i) => (
                <li key={i} className="uppercase font-bold">
                  <NavLink to={e.path}>
                    <img src={e.iconPath} alt={e.title} />
                    {e.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="normal-case text-xl" href="/">
            film buddy
          </a>
        </div>
        <div className="flex-1 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {headerNav.map((e, i) => (
              <li key={i} className="uppercase font-bold text-sm">
                <NavLink to={e.path}>
                  <img src={e.iconPath} alt={e.title} className="h-3/5"/>
                  {e.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-initial">
          <button className="btn">sign in</button>
        </div>
      </div>
    </Router>
  );
};

export default Header;
