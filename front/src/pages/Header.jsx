import React from "react";
import '../css/header.css'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="header-menu"> Shop</div>
      <div className="header-logo">
        <Link to='/'></Link>
        </div>
      <div className="header-right-menu">
        <div>Login</div>
        <div>Cart</div>
      </div>

    </div>
  );
}
