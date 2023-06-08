import React, { useReducer } from "react";
import axios from "axios";
import CartContext from "./CartContext";

const init = {
  cart: [],
  isEmpty: false,
};

const reducer = (state, action) => {
  if (action.type === "Add") {
    let { item } = action.payload;
    return {
      cart: [...state.cart, item],
    };
  } else if (action.type === "Remove") {
    console.log("delete");
    return {
      ...state,
      cart: state.cart.filter((item) => item.key !== action.payload.key),
    };
  } else if (action.type === "ClearCart") {
    return {
      ...state,
      cart: [],
    };
  } else if (action.type === "Fetch") {
    return {
      ...state,
      cart: action.payload,
    };
  }
  return state;
};
const CartProvider = (props) => {
  const [arr, dispatch] = useReducer(reducer, init);

  const handleAddItem = async (item) => {
    const email = localStorage.getItem("email").replace(/[.@]/g, "");

    try {
      const itemExists = arr.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemExists > -1) {
        alert("This item is already available");

        return;
      } else {
        dispatch({ type: "Add", payload: { item } });
        await axios.post(
          `https://ecommerce-4aafe-default-rtdb.firebaseio.com/cart${email}.json`,
          item
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveItem = async (key) => {
    const email = localStorage.getItem("email").replace(/[.@]/g, "");
    c;
    try {
      await axios.delete(
        `https://ecommerce-4aafe-default-rtdb.firebaseio.com/cart${email}/${key}.json`
      );
      dispatch({ type: "Remove", payload: { key } });
    } catch (err) {
      console.log(err);
    }
  };
  const clearCart = async () => {
    const email = localStorage.getItem("email").replace(/[.@]/g, "");
    try {
      arr.cart.forEach(async (item) => {
        await axios.delete(
          `https://ecommerce-4aafe-default-rtdb.firebaseio.com/cart${email}/${item.key}.json`
        );
      });
      dispatch({ type: "ClearCart" });
      alert("item purchased");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCartItems = async () => {
    const email = localStorage.getItem("email").replace(/[.@]/g, "");

    try {
      const res = await fetch(
        `https://ecommerce-4aafe-default-rtdb.firebaseio.com/cart${email}.json`
      );

      const data = await res.json();

      if (res.ok) {
        const items = Object.entries(data).map(([key, exp]) => ({
          key,
          ...exp,
        }));
        dispatch({ type: "Fetch", payload: items });
      } else {
        arr.cart = [];
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: arr.cart,
        handleAddItem,
        handleRemoveItem,
        clearCart,
        fetchCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
