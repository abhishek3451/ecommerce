import { Fragment, useContext } from "react";
import CartContext from "../store/CartContext";

import "./CartItem.css";

const CartItem = ({ id, title, price, imageUrl, quantity }) => {
  const { handleRemoveItem } = useContext(CartContext);
  return (
    <Fragment>
      <div className="cart-row">
        <span className="cart-item cart-column">
          <img src={imageUrl} alt="" className="cart-img" />
          <span>{title}</span>
        </span>
        <span className="cart-price cart-column">Rs.{price}</span>
        <span className="cart-quantity cart-column">
          <input type="number" defaultValue={quantity}></input>

          <button
            className="cart-update-remove"
            onClick={() => handleRemoveItem(id)}
          >
            Remove
          </button>
        </span>
      </div>
    </Fragment>
  );
};
export default CartItem;
