import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const user = useLoaderData();
  return (
    <>
      <div>welcome {user.name}</div>
    </>
  );
}
export const loader_method = () => {
  console.log("home");
  return { name: "yuvraj" };
};
