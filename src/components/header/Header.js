import "./header.css";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-title">anton.io</div>
        <div className="header">
          <Link to="/">home</Link>
          <Link to="/dotd">dotd</Link>
          <Link to="/blog">blog</Link>
          <Link to="/about">about</Link>
        </div>
        <div className="header-login">login</div>
      </div>
    </>
  );
}

export default Header;
