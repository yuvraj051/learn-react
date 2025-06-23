import React, { createContext, useState } from "react";
export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setuser] = useState({ username: "", password: "" });
  return (
    <>
      <UserContext.Provider value={{ user, setuser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
