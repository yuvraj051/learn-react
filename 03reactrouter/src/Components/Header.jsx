import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-[100vw] bg-black text-amber-50">
      <nav className="flex justify-around">
        <NavLink className="p-1 " rel="stylesheet" to="/">
          home
        </NavLink>
        <NavLink className="p-1 " rel="stylesheet" to="/about_us">
          about-us
        </NavLink>
      </nav>
    </div>
  );
}
