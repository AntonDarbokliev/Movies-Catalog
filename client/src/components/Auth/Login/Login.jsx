import { useState } from "react";
import "./Login.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";
import { requestFactory } from "../../../services/requester.js";


export const Login = () => {
  
  const { formValues ,onChangeHandler } = useForm({
    email : '',
    password : ''
  })

  const baseUrl = 'http://localhost:3000/user/login'

  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    requestFactory.post(baseUrl,formValues)
    .then(setLoggedIn(true))
    .catch(err => console.log(err));
  };

  return (
    <form id="registerForm" onSubmit={handleLogin}>
      {loggedIn && (
        <Navigate to='/' replace={true}/>
      )}
      <h1 id='header'>Login</h1>
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
      <SubmitButton text={"Login"} />

    <p id="registerLink">Don't have an account? Register <Link to='/user/register'>here</Link>!</p>
    </form>
  );
};
