import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      <ScrollToTop />
      <Header isHome={isHome} />
      <Outlet />
      <Footer />
    </div>
  );
}
