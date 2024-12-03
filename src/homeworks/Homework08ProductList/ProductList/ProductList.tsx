import { v4 } from "uuid";
import { useState } from "react";
import ProductNameItem from "../ProductNameItem/ProductNameItem";
import ProductQuantityItem from "../ProductQuantityItem/ProductQuantityItem";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {InputProductControl, InputQuantityControl, InputsWrapper, ProductWrapper, QuantityRemoveButtonWrapper, StyledBox1, StyledBox2, StyledUl} from "./styles"
import { Product } from "../ProductNameItem/data";
import ButtonItem from "../ButtonItem/ButtonItem";

function ProductList() {
  const [productName, setProductName] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]); //product - объект

  function addProduct() {
    if (!productName || !productQuantity) {
      return;
    }
    let newProduct = {
      name: productName,
      quantity: productQuantity,
      id: v4(),
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setProductQuantity(0);
  }

  function removeProduct(id: string) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div>
      <div className="inputButtonWrapper">
        <InputsWrapper>
          <InputProductControl>
            <Input
              name="product"
              id="product-id"
              type="text"
              placeholder="Enter the product name"
              label="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </InputProductControl>
          <InputQuantityControl>
            <Input
              name="quantity"
              id="quantity-id"
              type="number"
              min={0}
              step={1}
              label="Quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.valueAsNumber)}
            />
          </InputQuantityControl>
        </InputsWrapper>
        <Button onClick={addProduct} name="Add to basket" />
      </div>
      <ProductWrapper>
        <StyledBox1>
          <h3>Product name</h3>
          <StyledUl>
            {products.map((product) => (
              <ProductNameItem
                name={product.name}
                key={product.id}
                id={product.id}
                
              />
            ))}
          </StyledUl>
        </StyledBox1>

        <StyledBox2>
          <h3>Quantity</h3>
          <StyledUl>
            {products.map((product) => (
              <QuantityRemoveButtonWrapper>
              <ProductQuantityItem
                quantity={product.quantity}
                key={product.id}
                id={product.id}
              />
              <ButtonItem onClick= {()=>removeProduct(product.id)}/>
              </QuantityRemoveButtonWrapper>
            ))}
          </StyledUl>
        </StyledBox2>
      </ProductWrapper>
    </div>
  );
}

export default ProductList;
