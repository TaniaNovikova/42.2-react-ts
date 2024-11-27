import Button from "../Button/Button";
import Input from "../Input/Input";
import  {LoginFormWrapper, LoginFormTitle, InputsContainer} from "./styles";

function LoginForm() {
  const login = (): void => {
    console.log("User logged in succesfully");
  };

  return (
    <LoginFormWrapper className="login-form-wrapper">
      <LoginFormTitle className="login-form-title">Login form</LoginFormTitle>
      <InputsContainer className="inputs-container">
        <Input
          name="email"
          id="user_email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          id="user_password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <Button name="Login" type="submit" onClick={login} />
    </LoginFormWrapper>
  );
}

export default LoginForm;
