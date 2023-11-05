import { useState } from "react";
import "./Login.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    console.log("Form Data:", formData);
  };

  return (
    <form id="registerForm" onSubmit={handleLogin}>
      <h1 id='header'>Login</h1>
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
      <SubmitButton text={"Login"} />

    <p id="registerLink">Don't have an account? Register <Link to='/user/register'>here</Link>!</p>
    </form>
  );
};
