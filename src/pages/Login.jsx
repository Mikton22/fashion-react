function Login() {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Login</h1>
      <input placeholder="email" />
      <br />
      <input placeholder="password" type="password" />
      <br />
      <button>Sign in</button>
      <br />
      <span>or</span>
      <br />
      <button>Sign up</button>
    </div>
  );
}

export default Login;
