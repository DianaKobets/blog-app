import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/Login.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/articles");
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={handleLogin} className="login">
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn-login" type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
