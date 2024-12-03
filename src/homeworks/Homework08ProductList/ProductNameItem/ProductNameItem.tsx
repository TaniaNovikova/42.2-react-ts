import{StyledNameLi} from "./styles";
import { Product } from "./data";

  const ProductNameItem = ({ name, id }:Product) => {

  return (
    <StyledNameLi>
      <div id={id}>{name}</div>
    </StyledNameLi>
  );
};
export default ProductNameItem;
