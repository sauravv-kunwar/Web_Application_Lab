import React, { useState } from "react";
import CustomInput from "./CustomInput";

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <CustomInput
        label="Name"
        type="text"
        name="name"
        value={registerData.name}
        onChange={handleChange}
      />

      <CustomInput
        label="Email"
        type="email"
        name="email"
        value={registerData.email}
        onChange={handleChange}
      />

      <CustomInput
        label="Password"
        type="password"
        name="password"
        value={registerData.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;