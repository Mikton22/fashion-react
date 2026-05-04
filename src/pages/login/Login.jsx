import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__box">
        <h1>Login</h1>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button className="login__btn login__btn--primary">Sign in</button>
        <span className="login__or">or</span>
        <button className="login__btn login__btn--secondary">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
