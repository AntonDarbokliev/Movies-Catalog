import { useState } from "react";
import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";

export const Register = () => {
  const { formValues, onChangeHandler} = useForm({
    username: "",
      email: "",
      password: "",
      repeatPassword: "",
  })

  

  const [registered,setRegsitered] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(formValues),
      credentials : 'include'
    })
    .then(setRegsitered(true))
    .catch((err) => console.log(err));
  };

  return (
    <form id="registerForm" onSubmit={handleRegister}>
      {registered && (
        <Navigate to='/' replace={true}/>
      )}
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
