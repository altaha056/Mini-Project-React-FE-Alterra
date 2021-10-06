import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const user_id = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="header-container">
        <Link to="/">
          <div className="header-title">anton.io</div>
        </Link>
        <div className="header">
          <Link to="/">
            <a>home</a>
          </Link>
          <Link to="/dotd">
            <a>dotd</a>
          </Link>
          <Link to="/blog">
            <a>blog</a>
          </Link>
          <Link to="/about">
            <a>about</a>
          </Link>
        </div>
        <div className="header-login">
          {user_id === null ? (
            <Link to="/login">
              <a>login</a>
            </Link>
          ) : (
            <Link to="/profile">
              <a>profile</a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
