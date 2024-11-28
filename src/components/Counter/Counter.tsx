import { CounterContainer, ButtonWrapper, CounterResult } from "./styles";
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
  console.log("Render");

  const [count, setCount] = useState<number>(0);

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button name="-" onClick={onMinusClick} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterContainer>
  );
}

export default Counter;
