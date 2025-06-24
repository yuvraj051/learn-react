import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { useNavigate } from "react-router-dom";

function Profile() {
  const Navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      welcome {user.username}
      <input type="button" onClick={() => Navigate("/other")} value="go to" />
    </>
  );
}

export default Profile;
