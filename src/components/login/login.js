import "./login.css";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <div className="login-title">
            <h1>Join The Club</h1>
          </div>
        </div>
        <div className="form-container">
          <form>
            <div className="login-input">
              <p>username</p>
              <input type="text" />
            </div>
            <div className="login-input">
              <p>password</p>
              <input type="password" />
            </div>
            <button className="login-button">
              <p>Login</p>
            </button>
            <br />
            <Link to="/register">
              <button className="register-button">
                <p>Register</p>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
