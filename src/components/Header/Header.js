import "./Header.css";
import { Link } from "react-router-dom";

import NavItem, { NavItemDropdown } from "../NavItem/NavItem";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark ">
      <div className="container"> 
        <Link to="/" className="navbar-brand">
          <h4>
            <span>W</span>izard
          </h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <Link to="/" className="nav-link active"> Home</Link>
            <NavItem>
            <Link to="/FAQ" className="nav-link "> FAQ</Link>
            </NavItem>
            <NavItem>
            <Link to="/About" className="nav-link "> About</Link>
            </NavItem>
            <NavItem>
            <Link to="/Contact" className="nav-link "> Contact us</Link>
            </NavItem>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
