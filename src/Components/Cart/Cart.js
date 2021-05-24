import React from "react";
import Styles from "./Cart.module.css";
const Cart = () => {
  const cartItems = <ul className={Styles['cart-items']}>{[{ id: "c1", name: "Susi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>)}</ul>;
  );
  return (
    <div>
      {cartItems}
      <div className={Styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
      </div>
      <div className={Styles.actions}>
          <button className={Styles['button--alt']}>Close</button>
          <button className={Styles.button}>Order</button>
      </div>
    </div>
  );
};
export default Cart;
