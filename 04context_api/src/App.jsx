import React, { useState } from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import ThemContextProvider from "./Context/ThemContextProvider";
import NoPermissionComponent from "./Components/NoPermissionComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemContextProvider>
        <Header />
      </ThemContextProvider>
    ),

    children: [
      {
        path: "",
        element: (
          // <Login />,
          <UserContextProvider>
            <Login />
          </UserContextProvider>
        ),
      },
      {
        path: "profile",
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
        path: "other",
        element: (
          // <UserContextProvider>
          <NoPermissionComponent />
          // </UserContextProvider>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Login />
        <Profile/> */}
    </>
  );
}

export default App;

//

//  children: [
//       {
//         path: "",
//         element: <Login />,
//         // <UserContextProvider>
//         // <Login />
//         // </UserContextProvider>
//       },
//       {
//         path: "profile",
//         element: (
//           <>
//             <UserContextProvider>
//               <Profile />
//               <Login />
//             </UserContextProvider>
//           </>
//         ),
//       },
//       {
//         path: "other",
//         element: (
//           // <UserContextProvider>
//           <NoPermissionComponent />
//           // </UserContextProvider>
//         ),
//       },
//     ],
