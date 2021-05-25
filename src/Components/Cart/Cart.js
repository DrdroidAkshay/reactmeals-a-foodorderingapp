import React from "react";
import Modal from "../UI/Modal";
import Styles from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {[{ id: "c1", name: "Susi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={Styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
