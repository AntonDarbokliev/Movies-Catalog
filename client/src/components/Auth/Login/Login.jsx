import { useContext } from "react";
import "./Login.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { useFormValidation } from "../../../hooks/useFormValidation.js";
import { ErrorField } from "../../ErrorField/ErrorField.jsx";


export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext)
  const { formValues ,onChangeHandler, onSubmit } = useForm({
    email : '',
    password : ''
  },onLoginSubmit)

  const { onBlurHandler,onFocusHandler,validationValues} = useFormValidation({
    email : false,
    password : false
  })

  const isEmailInvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email) == false && validationValues.email == true
  const isPasswordInvalid = formValues.password.length < 3 && validationValues.password == true

  return (
    <form id="registerForm" onSubmit={onSubmit}>
      <h1 id='header'>Login</h1>
      <div className="loginField" >
      <FormField
        name="email"
        type="text"
        placeholder={'Email'}
        value={formValues.email}
        onChange={onChangeHandler}
        onBlur={() => onBlurHandler('email')}
        onFocus={() => onFocusHandler('email')}
      />
      {isEmailInvalid && formValues.email != '' && <ErrorField message={"Invalid email"}/>}
      </div>
      <div className="loginField" >
      <FormField
        name="password"
        type="password"
        placeholder={'Password'}
        value={formValues.password}
        onChange={onChangeHandler}
        onBlur={() => onBlurHandler('password')}
        onFocus={() => onFocusHandler('password')}
        />
      {isPasswordInvalid && formValues.password !== '' &&  <ErrorField message={"Password can't be less than 3 characters long"} />}
      </div>
      <SubmitButton text={"Login"} disabled={
        isEmailInvalid ||
        isPasswordInvalid ? true : false
      }/>

    <p id="registerLink">Don't have an account? Register <Link to='/user/register'>here</Link>!</p>
    </form>
  );
};
