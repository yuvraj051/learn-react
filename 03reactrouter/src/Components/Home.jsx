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
