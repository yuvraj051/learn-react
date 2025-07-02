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
        <h1 className="dark:bg-black w-[70vw] bg-white text-black  dark:text-white p-4 rounded">
          project 04 them-changer
        </h1>
        <div className="bg-white dark:bg-black dark:text-white  text-black p-4 rounded">
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
