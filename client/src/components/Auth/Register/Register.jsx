import { useState } from "react";
import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link, redirect } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(formData)
    })
      .then(redirect("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form id="registerForm" onSubmit={handleRegister}>
      <h1 id="header">Register</h1>
      <FormField
        name="username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
      />
      <FormField
        name="email"
        type="text"
        value={formData.email}
        onChange={handleInputChange}
      />
      <FormField
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <FormField
        name="repeatPassword"
        type="password"
        value={formData.repeatPassword}
        onChange={handleInputChange}
      />
      <SubmitButton text={"Register"} />

      <p id="loginLink">
        Already have an account? Login <Link to="/user/login">here</Link>!
      </p>
    </form>
  );
};
