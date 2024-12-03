import { ChangeEvent, useState } from "react";
import {
  ProductBox,
  Homework08Container,
  InputFieldsWrapper,
  ProductWrapper,
  QuantityBox,
  QuantityWrapper,
  AllWrapper,
  ButtonControl,
  // InputControl,
} from "./styles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
// import ProductList from "./ProductList/ProductList";
function Homework08() {
  // Состояние для хранения значения инпута (только одного)
  const [inputValueProduct, setInputValueProduct] = useState<string>("");
  const [inputValueQuantity, setInputValueQuantity] = useState<number>(0);
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const quantityBox = quantity ? quantity : "";

  const onChangeInputProduct = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValueProduct(event.target.value);
  };
  const onChangeInputQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValueQuantity(event.target.valueAsNumber);
  };

  const addValue = () => {
    if (!inputValueProduct || !inputValueQuantity) {
      return;
    }
    setProduct(inputValueProduct);
    setQuantity(inputValueQuantity);
    setInputValueProduct("");
    setInputValueQuantity(0);
  };

 
  return (
    <Homework08Container>
      <AllWrapper>
        <InputFieldsWrapper>
          <ProductWrapper>
            <Input
              name="product"
              id="product-id"
              type="text"
              placeholder="Enter the product name"
              label="Product name"
              onChange={onChangeInputProduct}
              value={inputValueProduct}
            />
            <ProductBox>{product}</ProductBox>
          </ProductWrapper>
          <QuantityWrapper>
            <Input
              name="quantity"
              id="quantity-id"
              type="number"
              // placeholder=""
              min={0}
              step={1}
              label="Quantity"
              onChange={onChangeInputQuantity}
              value={inputValueQuantity}
            />
            <QuantityBox>{quantityBox}</QuantityBox>
          </QuantityWrapper>
        </InputFieldsWrapper>
        <ButtonControl>
        <Button name={"Add to busket"} type="button" onClick={addValue} />
        </ButtonControl>
      </AllWrapper>
    </Homework08Container>
  );
}
export default Homework08;
