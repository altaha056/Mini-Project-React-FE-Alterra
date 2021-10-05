import "./header.css";
import { Link } from "react-router-dom";

function Header() {
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
            <Link to="/login">
              <a>login</a>
            </Link>
          </div>
        </div>
    </>
  );
}

export default Header;
