
import "./styles.ts";
import { InputProps } from './types';
import { InputContainer, InputElement, Label } from './styles';

function Input({ name, id, type = 'text', placeholder, label, onChange, value, min, step }: InputProps) {
  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
        onChange={onChange}
        value={value}
        min={min}
        step={step}
      />
    </InputContainer>
  );
}

export default Input;
