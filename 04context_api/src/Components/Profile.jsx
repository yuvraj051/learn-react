import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const Navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      welcome {user.username}
      <Link to={"/other"} />
    </>
  );
}

export default Profile;
