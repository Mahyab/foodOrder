import React, { useContext, useEffect, useState } from "react"
import CardIcon from '../Cart/CardIcon';
import style from './HeaderCardButton.module.css';
import CartContext from "../../store/card-context";


const HeadeCardButton = props =>{
    const [buttonIsHighlighted , setButtonIsHighlighted] = useState(false);
    const cardCtx = useContext(CartContext);
    const {items} = cardCtx;

    const numberOfCardItems = items.reduce((currentNumber ,item )=>{
        return currentNumber + item.amount
    }, 0)
    // console.log(cardCtx);
    const buttonClasses = `${style.button} ${buttonIsHighlighted ? style.bump :''}`;
    useEffect(() =>{
        if(cardCtx.items.length ===0){
            return;
        }
        setButtonIsHighlighted(true);

       const timer = setTimeout(()=>{
        setButtonIsHighlighted(false);
            
        },300);

        return () =>{
            clearInterval(timer)
        };

    },[items])
    return(
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={style.icon}>
                <CardIcon></CardIcon>
            </span>
            <span >
                your Card
            </span>
            <span className={style.badge}>{numberOfCardItems}</span>
        </button>
    )
}
export default HeadeCardButton