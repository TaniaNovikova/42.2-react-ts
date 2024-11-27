import { Homework07Wrapper } from "./styles";
import Input from "../../components/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import Button from "../../components/Button/Button";
import Feedback from "../../components/Feedback/Feedback";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData } from "../../components/AnimalCard/data";
function Homework07() {
  return (
    <Homework07Wrapper className="homework07-wrapper">
      <Button name={"Active"} />
      <Button disabled name={"Disabled"} />
      <Input
        name={"Somewhat"}
        label="Somewhat"
        placeholder="Input somewhat please"
      />
      <LoginForm />
      <Feedback />
      <AnimalCard animalData={lionData} />
    </Homework07Wrapper>
  );
}
export default Homework07;
