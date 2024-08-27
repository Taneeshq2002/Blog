import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Context, ContextProvider } from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/posts", element: <Home /> },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/login", element: <ProtectedRoute component={<Login />} /> },
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <ProtectedRoute component={<Write />} /> },
      {
        path: "/settings",
        element: <ProtectedRoute component={<Settings />} />,
      },
    ],
  },
]);

function ProtectedRoute({ component }) {
  const { user } = useContext(Context);
  return user ? component : <Login />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
