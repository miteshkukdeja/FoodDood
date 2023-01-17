import React from "react";
import styles from "./Header.module.css";
import mealsIamge from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>FoodDood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsIamge} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
