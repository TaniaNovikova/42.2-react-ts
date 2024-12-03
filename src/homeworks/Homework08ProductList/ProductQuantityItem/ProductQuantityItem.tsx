import "./styles.ts";
import { Product } from "../ProductNameItem/data";
import { StyledQuantityLi } from "./styles";

function ProductQuantityItem ({ quantity,  id}:Product, removeProduct:void ) {
  
  return (
    <StyledQuantityLi>
      <div id={id}>{quantity}</div>
    </StyledQuantityLi>
  );
};
export default ProductQuantityItem;


