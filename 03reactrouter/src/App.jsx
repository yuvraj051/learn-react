import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import About_us from "./Components/about-us";
import Header from "./Components/Header";
import Home, { loader_method } from "./Components/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,

      children: [
        {
          path: "",
          element: <Home />,
          loader: loader_method,
        },
        {
          path: "about_us",
          element: <About_us />,
          loader: () => {
            console.log("about-us");
            return null;
          },
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
