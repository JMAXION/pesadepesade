import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import Sidebar from "../components/header/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { getIsLogout } from "../modules/reduxMemberAxios.js";
import { getUser, removeUser } from "../util/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Header({ isHome }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = getUser();

  const [isTop, setIsTop] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // cartCount 상태로 변경

  const url = `http://127.0.0.1:8080/cart/count`;

  useEffect(() => {
    // 서버에 주기적으로 요청하기 위한 인터벌 설정
    const interval = setInterval(() => {
      axios({
        method:'POST',
        url:url,
        data: {userId : userInfo ? userInfo.userId : ''}
      })
        .then(result => {
          setCartCount(result.data.count); // count 값을 상태로 저장
        })
        .catch(error => {
          console.error('Error fetching cart count:', error);
        });
    }, 500); // 5초마다 요청

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(interval);
  }, [userInfo]); // 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행

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
                  <Link to={userInfo.userId === "admin" ? "/admin" : "/mypage"}>
                    {userInfo.userId === "admin" ? "Admin" : "My Page"}
                  </Link>
                </div>
              </>
            ) : (
              <div className="header-right-menu-react">
                <Link to={"/login"}>Login</Link>
              </div>
            )}
            <div>
              {cartCount >= 1 ? (
                <div>
                  <div className="cart-item-circle"></div>
                  <Link to={"/cart"}>Cart </Link>
                </div>
              ) : (
                <div>
                  <Link to={"/cart"}>Cart</Link>
                </div>
              )}
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
