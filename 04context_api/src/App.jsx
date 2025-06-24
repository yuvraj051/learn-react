import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Components/Profile";
import NoPermissionComponent from "./Components/noPermissionComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <UserContextProvider>
          <Profile />
          <Login />
        </UserContextProvider>
      </>
    ),
  },
  {
    path: "/other",
    element: (
      // <UserContextProvider>
      <NoPermissionComponent />
      // </UserContextProvider>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Login />
        <Profile/> */}
    </>
  );
}

export default App;
