import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex">
      <h1 className="m-6 bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-xl w-[60vw]">
        welcome {user.username}
      </h1>
      <Link
        className="m-6 bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-xl w-[20vw]"
        to={"/other"}
      >
        test Component
      </Link>
    </div>
  );
}

export default Profile;
