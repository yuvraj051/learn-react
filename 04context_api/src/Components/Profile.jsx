import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      welcome {user.username}
      <Link to={"/other"}>test Component</Link>
    </>
  );
}

export default Profile;
