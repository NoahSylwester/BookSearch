import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Readit
      </a>
      <ul className="nav navbar-nav">
        <li><a href="/Saved">Saved</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
