
import  {InputContainer, InputElement, InputElementLabel} from "./styles";
import { InputProps } from './types'

function Input({ name, id, type = 'text', placeholder, label }: InputProps) {
  return (
    <InputContainer className="input-container">
      {/* Пример оператора условного рендеринга */}
      {label && <InputElementLabel htmlFor={id}>{label}</InputElementLabel>}
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;
