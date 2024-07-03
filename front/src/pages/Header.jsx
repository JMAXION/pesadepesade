import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "../css/header.css";

export default function Header({ isHome }) {
  const [isTop, setIsTop] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsTop(window.scrollY < 50);
    };

    if (isHome) {
      checkScrollPosition();
      window.addEventListener("scroll", checkScrollPosition);
      return () => {
        window.removeEventListener("scroll", checkScrollPosition);
      };
    } else {
      setIsTop(false);
    }
  }, [isHome]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <div
        className={`header ${
          isHome && isTop ? "header-top" : "header-scrolled"
        }`}
      >
        <div className="header-menu" onClick={toggleDrawer(true)}>
          Shop
        </div>
        <div className="header-logo">
          <Link
            to="/"
            className={`${isHome && isTop ? "logo-top" : "logo-scrolled"}`}
          ></Link>
        </div>
        <div className="header-right-menu">
          <div>
            <Link to={"/login"}>Login</Link>
          </div>
          <div>
            <Link to={"/cart"}>Cart</Link>
          </div>
        </div>
        <div className="sidebar-open" style={{ display: "none" }}></div>
      </div>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          className="drawer-content"
        >
          <div className="drawer-controller">
            <button
              type="button"
              className="drawer-close-button"
              onClick={toggleDrawer(false)}
            ></button>
          </div>
          <div className="drawer-list">
            <ul>
              <li>
                <Link to="/about" onClick={toggleDrawer(false)}>
                  about
                </Link>
              </li>
            </ul>
          </div>
          <div class="drawer-subcategory">
            <span>shop</span>
            <ul>
              <li>
                <a>all</a>
              </li>
              <li>
                <a>향수1</a>
              </li>
              <li>
                <a>향수2</a>
              </li>
              <li>
                <a>향수3</a>
              </li>
              <li>
                <a>향수4</a>
              </li>
              <li>
                <a>향수5</a>
              </li>
              <li>
                <a>향수6</a>
              </li>
              <li>
                <a>향수7</a>
              </li>
            </ul>
          </div>
          <div className="drawer-list">
            <ul>
              <li>
                <Link to="/journal" onClick={toggleDrawer(false)}>
                  journal
                </Link>
              </li>
              <li>
                <Link to="/stocklist" onClick={toggleDrawer(false)}>
                  stockist
                </Link>
              </li>
              <li>
                <Link to="/press" onClick={toggleDrawer(false)}>
                  press
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleDrawer(false)}>
                  login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
}
