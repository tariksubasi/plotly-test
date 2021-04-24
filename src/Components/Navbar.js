import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>plotly test</h1>
      <ul>
        <li>
          <NavLink to="/scatterz">Scatterz</NavLink>
        </li>
        <li>
          <NavLink to="/linez">Linez</NavLink>
        </li>
        <li>
          <NavLink to="/barz">Barz</NavLink>
        </li>
        <li>
          <NavLink to="/piez">Piez</NavLink>
        </li>
        <li>
          <NavLink to="/bubblez">Bubblez</NavLink>
        </li>
        <li>
          <NavLink to="/timeseries">Time Seriez</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
