import { useState } from "react";
import "./login.css";

function Login() {
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // email
    if (!form.email) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Некорректный email";
    }

    // password
    if (!form.password) {
      newErrors.password = "Введите пароль";
    } else if (form.password.length < 6) {
      newErrors.password = "Минимум 6 символов";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Result:", form);
    }

    // fake login
    if (form.email === "test@mail.com" && form.password === "123456") {
      setSuccess(true);
      setErrors({});
    } else {
      setErrors({
        general: "Неверный email или пароль",
      });
    }
  };

  return (
    <div className="login">
      <div className="login__box">
      {success && <div className="login__success">Успешный вход</div>}
        <h1>Login</h1>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="login__error">{errors.email}</span>}

        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <span className="login__error">{errors.password}</span>
        )}

        <button
          className="login__btn login__btn--primary"
          onClick={handleSubmit}
        >
          Sign in
        </button>
        {errors.general && (
          <span className="login__error">{errors.general}</span>
        )}
        <span className="login__or">or</span>
        <button className="login__btn login__btn--secondary">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
