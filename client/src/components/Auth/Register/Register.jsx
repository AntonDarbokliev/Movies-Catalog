import "./Register.css";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton";
import { FormField } from "../../Shared/FormField/FormField";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { ErrorField } from "../../ErrorField/ErrorField";

export const Register = () => {
  const { onRegisterSubmit } = useAuthContext()
  const { formValues, onChangeHandler,onSubmit } = useForm({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  },onRegisterSubmit);

  const { onBlurHandler,onFocusHandler,validationValues } = useFormValidation({
    username : false,
    email : false,
    password : false,
    repeatPassword : false,
  })

  const isUsernameInvalid = formValues.username.length < 3 && validationValues.username == true
  const isEmailInvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email) == false && validationValues.email == true
  const isPasswordInvalid = formValues.password.length < 3 && validationValues.password == true
  const isRepeatPasswordInvalid = formValues.password != formValues.repeatPassword && validationValues.repeatPassword == true


  return (
    <form id="registerForm" onSubmit={onSubmit}>
      <h1 id="header">Register</h1>
      <div className="registerField">
      <FormField
        name="username"
        type="text"
        placeholder={'Username'}
        value={formValues.username}
        onChange={onChangeHandler}
        onBlur={() => onBlurHandler('username')}
        onFocus={() => onFocusHandler('username')}
      />
      {isUsernameInvalid && formValues.username != '' && <ErrorField message={'Username should be at least 3 characters long'}/>}
      </div>
      <div className="registerField">
      <FormField
        name="email"
        type="text"
        placeholder={'Email'}
        value={formValues.email}
        onChange={onChangeHandler}
        onBlur={() => onBlurHandler('email')}
        onFocus={() => onFocusHandler('email')}
      />
      {isEmailInvalid && formValues.email != '' && <ErrorField message={'Invalid email'}/>}
      </div>

      <div className="registerField">
      <FormField
        name="password"
        type="password"
        placeholder={'Password'}
        value={formValues.password}
        onChange={onChangeHandler}
        onBlur={() => onBlurHandler('password')}
        onFocus={() => onFocusHandler('password')}
      />
      {isPasswordInvalid && formValues.password != '' && <ErrorField message={"Password should be at least 3 characters long"}/>}
      </div>

      <div className="registerField">
      <FormField
        name="repeatPassword"
        type="password"
        placeholder={'Repeat Password'}
        value={formValues.repeatPassword}
        onChange={onChangeHandler}
        onBlur={() => onBlurHandler('repeatPassword')}
        onFocus={() => onFocusHandler('repeatPassword')}
      />
      {isRepeatPasswordInvalid && formValues.repeatPassword != '' && <ErrorField message={'Passwords are not matching'} />}
      </div>

      <SubmitButton text={"Register"} 
      disabled={
        isUsernameInvalid ||
        isEmailInvalid || 
        isPasswordInvalid || 
        isRepeatPasswordInvalid ? true : false }
        />

      <p id="loginLink" >
        Already have an account? Login <Link to="/user/login" style={{color:'yellow'}}>here</Link>!
      </p>
    </form>
  );
};
