import { ButtonProps } from "./types";
import "./styles.css";

function Button({ name, type = "button", onClick }: ButtonProps) {

  return (
    <button onClick={onClick} className="main-button" type={type}>
      {name}
    </button>
  );
}

export default Button;
