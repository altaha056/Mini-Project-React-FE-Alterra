import React from "react";
import "./loginfirst.css";
import { Link } from "react-router-dom";

export const Loginfirst = () => {
  return (
    <div className="container-login-first">
      <h1>
        You need to&nbsp;
        <Link to="/login">login</Link>
        &nbsp;first
      </h1>
    </div>
  );
};
