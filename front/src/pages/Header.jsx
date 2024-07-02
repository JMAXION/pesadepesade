import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function Header({ isHome }) {
  const [isTop, setIsTop] = useState(true);

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

  return (
    <div
      className={`header ${isHome && isTop ? "header-top" : "header-scrolled"}`}
    >
      <div className="header-menu">Shop</div>
      <div className="header-logo">
        <Link
          to="/"
          className={`${isHome && isTop ? "logo-top" : "logo-scrolled"}`}
        ></Link>
      </div>
      <div className="header-right-menu">
        <div><Link to={'/login'}>Login</Link></div>
        <div><Link to={'/cart'}>Cart</Link></div>
      </div>
    </div>
  );
}
