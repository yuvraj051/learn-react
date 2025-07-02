import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const user = useLoaderData();
  return (
    <>
      <div>welcome {user.name}</div>
      <div className="w-[100vw]  flex justify-center">
        {/* <h1 className="absolute top-40 text-4xl ">yuvi</h1> */}
        {/* <img src="public/me.jpg" className="h-100 w-100 rounded-full " alt="" /> */}
      </div>
    </>
  );
}
export const loader_method = () => {
  console.log("home");
  return { name: "hello" };
};
