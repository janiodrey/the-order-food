import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../cart/CartIcon";

import classses from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsQty = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  return (
    <button className={classses.button} onClick={props.onClick}>
      <span className={classses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classses.badge}>{cartItemsQty}</span>
    </button>
  );
};

export default HeaderCartButton;
