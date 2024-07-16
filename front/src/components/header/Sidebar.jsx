import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-router-dom";

export default function Sidebar({ drawerOpen, toggleDrawer, userInfo ,handleLogout}) {
  return (
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

            <div className="mobile-logo">
              <p className="logo-top-m"></p>
            </div>
            <div className="mobile-cart" onClick={toggleDrawer(false)} >
            <Link to={"/cart"}>Cart</Link>
            </div>
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
        <div className="drawer-subcategory">
          <span>shop</span>
          <ul>
            <li style={{ transitionDelay: "0s" }}>
              <Link to={'/shop'}>all</Link>
            </li>
            <li style={{ transitionDelay: "0.1s" }}>
              <a>향수1</a>
            </li>
            <li style={{ transitionDelay: "0.2s" }}>
              <a>향수2</a>
            </li>
            <li style={{ transitionDelay: "0.3s" }}>
              <a>향수3</a>
            </li>
            <li style={{ transitionDelay: "0.4s" }}>
              <a>향수4</a>
            </li>
            <li style={{ transitionDelay: "0.5s" }}>
              <a>향수5</a>
            </li>
            <li style={{ transitionDelay: "0.6s" }}>
              <a>향수6</a>
            </li>
            <li style={{ transitionDelay: "0.7s" }}>
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
                stocklist
              </Link>
            </li>
            <li>
              <Link to="/press" onClick={toggleDrawer(false)}>
                press
              </Link>
            </li>
            {userInfo ? (
            <>
                <li>
                  <Link to='/mypage'  onClick={toggleDrawer(false)}>Mypage</Link>
                </li>
                <li onClick={handleLogout}>
                  <Link to={'/'} onClick={toggleDrawer(false)} >Logout</Link>
                </li>
            </>
            ) : (

            <li>
              <Link to="/login" onClick={toggleDrawer(false)}>
                login
              </Link>
            </li>
            )
            }
          </ul>
        </div>
      </div>
    </SwipeableDrawer>
  );
}
