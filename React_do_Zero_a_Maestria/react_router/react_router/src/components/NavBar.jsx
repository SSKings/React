// 2 - Links com react router
import "./NavBar.css";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link> */}
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="/About">About</NavLink>
    </nav>
  );
};

export default NavBar;
