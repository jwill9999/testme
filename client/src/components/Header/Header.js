import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <nav className="nav nav-pills nav-fill">
    <Link className="nav-item nav-link active" to="/">
      Home
    </Link>
    <Link className="nav-item nav-link active" to="/page">
      Page
    </Link>

    <a
      className="nav-item nav-link disabled"
      target="_blank"
      rel="noopener noreferrer"
      href="http://letuscode.co.uk"
    >
      LetusCode
    </a>
  </nav>
);

export default Header;
