import React from "react";
import Styles from "./MealItem.module.css";
const MealItem = (props) => {
  return (
    <li className={Styles.meal}>
      <div>
        <h3>{props.mealname}</h3>
        <div className={Styles.description}>{props.mealdescription}</div>
        <div className={Styles.price}>{`$${props.mealprice.toFixed(2)}`}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
