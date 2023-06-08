import React, { useContext } from "react";
import classes from "./productList.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../store/CartContext";

import { Link, useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const { handleAddItem } = useContext(CartContext);
  const navigate = useNavigate();
  const handleImage = (id) => {
    navigate(`/store/${id}`);
  };

  return (
    <div className={classes.car}>
      <span className={classes.title}>{props.item.title}</span>
      <div className={classes.size}>
        <Link to={`/store/${props.item.id}`}>
          <img
            className={classes.images}
            alt="../"
            src={props.item.imageUrl}
            onClick={() => handleImage(props.item.id)}
          />
        </Link>
      </div>
      <div className={classes.btmm}>
        <span className={classes.price}>Rs.{props.item.price}</span>
        <Button
          size="sm"
          variant="dark"
          className={classes.bttn}
          type="submit"
          onClick={() => handleAddItem(props.item, props.item.quantity)}
        >
          +ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
