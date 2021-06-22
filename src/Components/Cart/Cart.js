import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const CartCtx = useContext(CartContext);
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasitems = CartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const [checkoutisVisible, setCheckoutisVisible] = useState(false);
  const orderHandler = () => {
    setCheckoutisVisible(true);
  };
  const confirmOrderHandler = async (userdata) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://react-http-d5d4d-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          orderedItems: CartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    CartCtx.clearCart();
  };

  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalactions = (
    <div className={Styles.actions}>
      <button className={Styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasitems && (
        <button className={Styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const isSubmittingModalContent = <p>Submitting...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Order Placed SuccessFully</p>
      <div className={Styles.actions}>
        <button className={Styles.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutisVisible && (
        <Checkout onConfirm={confirmOrderHandler} onCancel={props.onClose} />
      )}
      {!checkoutisVisible && modalactions}
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
