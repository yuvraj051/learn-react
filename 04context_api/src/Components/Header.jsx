import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemContext } from "../Context/ThemContextProvider";

export default function Header() {
  const { them, setthem } = useContext(ThemContext);
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(them);
  }, [them]);

  return (
    <>
      <nav className="flex justify-between m-6">
        <h1>header</h1>
        <div>
          <input
            type="checkbox"
            name="them"
            checked={them === "dark"}
            onChange={() => {
              if (them === "dark") {
                setthem("light");
              } else {
                setthem("dark");
              }
            }}
            id=""
            placeholder="them"
          />
          dark
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
