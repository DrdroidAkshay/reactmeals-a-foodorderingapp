import CartIcon from "../Cart/CartIcon";
import Styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={Styles.button}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
