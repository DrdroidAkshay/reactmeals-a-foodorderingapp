import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const AddToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.mealname,
      amount: amount,
      price: props.mealprice,
    });
  };
  return (
    <li className={Styles.meal}>
      <div>
        <h3>{props.mealname}</h3>
        <div className={Styles.description}>{props.mealdescription}</div>
        <div className={Styles.price}>{`$${props.mealprice.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
