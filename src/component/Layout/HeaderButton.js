import { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import CartContext from "../store/CartContext";
import "../../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeaderButton = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <NavLink to="/cart" className={"LINK"}>
        <Button size="sm" variant="outline-light" className="py-0">
          <span>
            <FaShoppingCart />
          </span>
          <span>
            <Badge style={{ marginLeft: "3px" }} bg="none">
              {cart.length}
            </Badge>
          </span>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </NavLink>
    </>
  );
};

export default HeaderButton;
