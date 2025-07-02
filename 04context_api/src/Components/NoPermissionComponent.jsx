import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

function NoPermissionComponent() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1 className="bg-black">hello {user.username}</h1>
    </>
  );
}

export default NoPermissionComponent;
