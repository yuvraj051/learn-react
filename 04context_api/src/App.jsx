import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Components/Profile";
import NoPermissionComponent from "./Components/noPermissionComponent";
import Header from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,

    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "about_us",
        element: <Profile />,
        loader: () => {
          console.log("profiles");
          return null;
        },
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
