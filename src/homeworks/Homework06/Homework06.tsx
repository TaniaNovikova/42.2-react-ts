import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import Feedback from "../../components/Feedback/Feedback";

function Homework06() {
  return (
    <div className="homework06-wrapper">
      <Button onClick={() => {}}  name="Click me" />
      <Input
        name="somewhat"
        id="input-id"
        type="text"
        placeholder="Input somewhat please"
        label="Somewhat:"
      />
      <LoginForm />
      <Feedback />
    </div>
  );
}
export default Homework06;
