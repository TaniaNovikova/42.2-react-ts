// import "./styles.css";
import {MainButton} from './styles'
import { ButtonProps } from "./types";

function Button({ name, type = "button", onClick, disabled }: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <MainButton onClick={onClick} className="main-button" type={type} disabled={disabled}>
      {name}
    </MainButton>
  );
}

export default Button;
