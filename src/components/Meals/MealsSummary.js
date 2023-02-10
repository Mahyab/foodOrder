import React from "react";
import style from './MealsSummary.module.css';
const MealsSummary = () =>{
    return(
        <section className={style.summary}>
            <h2> Delicious Food , Delicious to you </h2>
            <p>choose your favorite meal from our board selection of available meals and enjoy a delicious lunch or dinner at home </p>
            <p>All our meals are cooked with high-quality ingredients </p>
        </section>
    )
}
export default MealsSummary;