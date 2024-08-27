import React from "react";
import Topbar from "./components/topbar/Topbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}

export default Layout;
