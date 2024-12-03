// import "./styles.css";
import { RemoveButton } from "./styles";
import { ButtonProps } from "./types";

function ButtonItem({ onClick }: ButtonProps) {

  return (
    <li className="styledButtonLi">
      <RemoveButton onClick={onClick}>X</RemoveButton>
    </li>
  );
}

export default ButtonItem;
