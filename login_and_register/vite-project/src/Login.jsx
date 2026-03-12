import React, { useState } from "react";
import CustomInput from "./CustomInput";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <CustomInput
        label="Email"
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
      />

      <CustomInput
        label="Password"
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;