import React from "react";
import "./loginfirst.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container-login-first">
      <h1>404 not found</h1>
      <h1>
        Looking for&nbsp;
        <Link to="/login">Home</Link>?
      </h1>
    </div>
  );
};
