// import { Product } from "../ProductNameItem/data";
import "./styles.css";

function RemoveButtonItem  ({id, removeProduct}) {
  

  return (
    <li className="styledButtonLi">
      <button className='removeButton'  onClick={() => removeProduct(id)}>X</button>
    </li>
  );
};
export default RemoveButtonItem;
