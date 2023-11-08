import { useState } from "react";
import "./Login.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link, Navigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formData);
    fetch('http://localhost:3000/user/login',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(formData) ,
      credentials : 'include'
    })
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
