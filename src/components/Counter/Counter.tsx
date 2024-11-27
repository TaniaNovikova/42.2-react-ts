import "./styles.css";
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
    <div className="counter-container">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} />
      </div>
      <div className="counter-result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
