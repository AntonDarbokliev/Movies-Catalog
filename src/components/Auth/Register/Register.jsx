import { useState } from "react";
import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link } from "react-router-dom";

export const Register = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    console.log("Form Data:", formData);
  };

  return (
    <form id="registerForm" onSubmit={handleRegister}>
      <h1 id='header'>Register</h1>
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
      <SubmitButton text={"Register"} />

    <p id="loginLink">Already have an account? Login <Link to='/user/login'>here</Link>!</p>
    </form>
  );
};
