import { useState } from "react";
import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link, Navigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [isRegistered,setIsRegsitered] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // navigate = useNavigate()
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(formData),
      credentials : 'include'
    })
    .then(setIsRegsitered(true))
    .catch((err) => console.log(err));
  };

  // if(isRegistered) {
  //   return  redirect('/')
  // }

  return (
    <form id="registerForm" onSubmit={handleRegister}>
      {isRegistered && (
        <Navigate to='/' replace={true}/>
      )}
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
