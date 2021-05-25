import React from "react";
import Styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={Styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={Styles["main-image"]}>
        <img src={mealsImage} alt="A table full of dishes" />
      </div>
    </React.Fragment>
  );
};
export default Header;
