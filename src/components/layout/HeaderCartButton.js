import CartIcon from "../cart/CartIcon";

import classses from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classses.button} onClick={props.onClick}>
      <span className={classses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
