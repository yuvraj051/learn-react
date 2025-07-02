import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();
  const { user, setuser } = useContext(UserContext);

  const handle_login = () => {
    Navigate("/profile");
  };
  return (
    <div className="m-6">
      {"  "}
      <input
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e) => setuser({ ...user, username: e.target.value })}
      />
      {"  "}
      <input
        type="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
      />
      {"  "}
      <input type="button" value="login" onClick={handle_login} />
    </div>
  );
}
