import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  const login = (): void => {
    console.log("User logged in succesfully");
  };

  return (
    <form className="login-form-wrapper">
      <div className="login-form-title">Login form</div>
      <div className="inputs-container">
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
      </div>
      <Button name="Login" type="submit" onClick={login} />
    </form>
  );
}

export default LoginForm;
