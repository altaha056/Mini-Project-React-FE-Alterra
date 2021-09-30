import "./login.css";
import Profile from "../profile/profile";
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
            <div>
              <input type="text" />
            </div>
            <button className="login-button">
              <p>Login</p>
            </button>
            <br />
            <button className="register-button">
              <p>Register</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
