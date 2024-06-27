import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

export default function Root() {
  return (
    <div>
      {/* <Header />
      <Outlet />
      <Footer /> */}
      <Login />
    </div>
  );
}
