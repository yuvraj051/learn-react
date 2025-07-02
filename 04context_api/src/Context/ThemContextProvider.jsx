import React, { createContext, useContext, useState } from "react";

export const ThemContext = createContext();

function ThemContextProvider({ children }) {
  const [them, setthem] = useState("dark");

  return (
    <>
      <ThemContext.Provider value={{ them, setthem }}>
        {children}
      </ThemContext.Provider>
    </>
  );
}

export default ThemContextProvider;
