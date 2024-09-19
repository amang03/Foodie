import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { links } from "../data";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../images/foodcrave-final.png";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" className="nav__logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {/* to hide navbar in mobile screen when a option is choosen */}
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <VscThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
