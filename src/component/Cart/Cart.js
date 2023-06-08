import { useContext, useEffect } from "react";
import CartContext from "../store/CartContext";

import "./CartItem.css";
import CartItem from "./CartItems";

const Cart = () => {
  const { cart, clearCart, fetchCartItems } = useContext(CartContext);

  let totalamount = Math.floor(cart.reduce((acc, val) => acc + val.price, 0));
  console.log("first", cart);
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <h1 className="centerTheCartName">Cart</h1>

      <div className="cart-row cart-header">
        <span className="cart-item  cart-column">ITEM</span>

        <span className="cart-price cart-column">PRICE</span>

        <span className="cart-quantity cart-column">QUANTITY</span>
      </div>

      {cart.map((item) => {
        return (
          <CartItem
            id={item.key}
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
          />
        );
      })}
      <div div className="total">
        Total
        <span> Rs.{totalamount}</span>
      </div>
      <button className="purchase" onClick={clearCart}>
        Purchase
      </button>
    </>
  );
};
export default Cart;
