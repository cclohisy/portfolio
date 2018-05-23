import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Navbar = props => (
  <div>
    <nav>
      <div className="nav-wrapper red accent-2">
        <Link className="brand-logo center" to="/">
          Cecilia Clohisy
       </Link>
        {/* <Link to ="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i>
       </Link> */}
        <a href="#" data-target="mobileMenu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/about">
              About
            </Link>

          </li>
          <li>
            <Link to="/portfolio">
              Portfolio
            </Link>

          </li>

        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobileMenu">
      <li>
        <Link to="/portfolio">
          Portfolio
            </Link>
      </li>
      <li>
        <Link to="/about">
          About
            </Link></li>
      {/* <li><a href="collapsible.html">contact link</a></li> */}
      <li><Link className="brand-logo center" to="/">
          Cecilia Clohisy
       </Link></li>
    </ul>
  </div>
);

export default Navbar;

