import React from "react";
import Styles from "./MealItem.module.css";
const MealItem = (props) => {
  return (
    <div className={Styles.meal}>
      <h3>{props.mealname}</h3>
      <div className={Styles.price}>{props.mealprice}</div>
      <div className={Styles.description}>{props.mealdescription}</div>
    </div>
  );
};
export default MealItem;
