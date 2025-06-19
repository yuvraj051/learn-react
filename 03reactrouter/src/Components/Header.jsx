import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink rel="stylesheet" to="/">
          home
        </NavLink>
        <NavLink rel="stylesheet" to="/about_us">
          about-us
        </NavLink>
      </nav>
    </div>
  );
}
