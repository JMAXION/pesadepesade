import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import Sidebar from "../components/header/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { getIsLogout } from "../modules/reduxMemberAxios.js";
import { getUser, removeUser } from "../util/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ isHome }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = getUser();

  const [isTop, setIsTop] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    dispatch(getIsLogout());
    alert("로그아웃 되었습니다");
    removeUser();
    navigate("/");
  };

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
        <div className="header-content">
          <div className="header-menu" onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBars} className="header-menu-icon" />
            <span>Shop</span>
          </div>
          <div className="header-logo">
            <Link
              to="/"
              className={`${isHome && isTop ? "logo-top" : "logo-scrolled"}`}
            ></Link>
          </div>
          <div className="header-right-menu">
            {userInfo ? (
              <>
                <div onClick={handleLogout} className="header-right-menu-react">
                  <Link to={"/"}>Logout</Link>
                </div>
                <div className="header-right-menu-react">
                  <Link to="/mypage">My Page</Link>
                </div>
              </>
            ) : (
              <div className="header-right-menu-react">
                <Link to={"/login"}>Login</Link>
              </div>
            )}
            <div>
              <Link to={"/cart"}>Cart</Link>
            </div>
          </div>
        </div>
      </div>

      <Sidebar
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        userInfo={userInfo}
        handleLogout={handleLogout}
      />
    </>
  );
}
