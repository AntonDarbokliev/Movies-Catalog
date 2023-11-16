import { useContext } from "react";
import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";
import { AuthContext } from "../../../contexts/AuthContext.jsx";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext)
  const { formValues, onChangeHandler,onSubmit } = useForm({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  },onRegisterSubmit);

  return (
    <form id="registerForm" onSubmit={onSubmit}>
      <h1 id="header">Register</h1>
      <FormField
        name="username"
        type="text"
        placeholder={'Username'}
        value={formValues.username}
        onChange={onChangeHandler}
      />
      <FormField
        name="email"
        type="text"
        placeholder={'Email'}
        value={formValues.email}
        onChange={onChangeHandler}
      />
      <FormField
        name="password"
        type="password"
        placeholder={'Password'}
        value={formValues.password}
        onChange={onChangeHandler}
      />
      <FormField
        name="repeatPassword"
        type="password"
        placeholder={'Repeat Password'}
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
