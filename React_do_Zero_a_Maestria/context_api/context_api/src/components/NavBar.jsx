import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/principal">Principal</NavLink>
      <NavLink to="/info">Informações</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  );
};

export default NavBar;
