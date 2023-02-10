import React , {useContext} from "react";

import style from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/card-context";
import CartItem from "./CartItem";
const Cart = props =>{
    const cartCtx = useContext(CartContext);
    const totalAmonut = cartCtx.totalAmount.toFixed(2);
    const hasItem = cartCtx.items.length > 0;
    const  cartItemRemoveHandler = id  =>{
        cartCtx.removeItem(id);  
    };
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item , amount:1})
    };



    const cartItems = <ul className={style['cart-items']}>{cartCtx.items.map((item) =>(<CartItem key={item.id} name={item.name} price={item.price } amount={item.amount} onRemove ={cartItemRemoveHandler.bind(null , item.id)} onAdd={cartItemAddHandler.bind(null , item)}/>))}</ul>
    console.log(cartCtx.items);
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmonut}</span>
            </div>
            <div className={style.actions}>
                <button  className={style['button--alt']} onClick={props.onClose}>close</button>
             { hasItem &&  <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default  Cart;