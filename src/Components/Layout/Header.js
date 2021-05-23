import React from "react";
import Styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
const Header = () => {
  return (
    <React.Fragment>
      <header className={Styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={Styles["main-image"]}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
};
export default Header;
