import React, { useContext } from "react";
import style from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/card-context";


const MealItem = props =>{
    const cardCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCardHandler = amount =>{
        console.log(amount);
        cardCtx.addItem({
            id:props.id,
            name: props.name,
            amount:amount,
            price:props.price

        });
    };
    return (    
        <li className={style.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddtoCard={addToCardHandler}/>
            </div>
        </li>
    );
};
export default MealItem;