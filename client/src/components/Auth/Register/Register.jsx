import { useState } from "react";
import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";
import { requestFactory } from "../../../services/requester.js";

export const Register = () => {
  const { formValues, onChangeHandler } = useForm({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const baseUrl = "http://localhost:3000/user/register";

  const [registered, setRegsitered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    requestFactory
      .post(baseUrl, formValues)
      .then(setRegsitered(true))
      .catch((err) => console.log(err));
  };

  return (
    <form id="registerForm" onSubmit={handleRegister}>
      {registered && <Navigate to="/" replace={true} />}
      <h1 id="header">Register</h1>
      <FormField
        name="username"
        type="text"
        value={formValues.username}
        onChange={onChangeHandler}
      />
      <FormField
        name="email"
        type="text"
        value={formValues.email}
        onChange={onChangeHandler}
      />
      <FormField
        name="password"
        type="password"
        value={formValues.password}
        onChange={onChangeHandler}
      />
      <FormField
        name="repeatPassword"
        type="password"
        value={formValues.repeatPassword}
        onChange={onChangeHandler}
      />
      <SubmitButton text={"Register"} />

      <p id="loginLink">
        Already have an account? Login <Link to="/user/login">here</Link>!
      </p>
    </form>
  );
};
