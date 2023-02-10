// wrapper provider component 
import React , {useReducer } from "react";
import CartContext from "./card-context";

const defaultCardState ={
    items:[],
    totalAmount:0,     
};
const cardReducer = (state , action) =>{
    if(action.type === 'ADD') {
        const upadateTotalItem = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item =>item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem) {
        
        const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex]  = updatedItem;
        }else {
             updatedItems = state.items.concat(action.item);
        }
  
        return {items:updatedItems ,totalAmount: upadateTotalItem};
    }
    if(action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item =>item.id === action.id);            
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1) {
            updatedItems= state.items.filter(items => items.id !==action.id);
        }else {
            const updatedItem = {...existingItem , amount : existingItem.amount -1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        };
        return {
            items :updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
   
    return defaultCardState;

}
const CardProvider = props =>{
    const [cardState , dispatchCardSate] =useReducer(cardReducer ,defaultCardState);
    const addItemCartHandler = item => {
        dispatchCardSate({type:'ADD' , item:item});
    };
    const removeItemFromCardHandler = id =>{
        dispatchCardSate({type:'REMOVE',id:id})
    };
    const cardContext = {
        items:cardState.items,
        totalAmount:cardState.totalAmount,
        addItem: addItemCartHandler,
        removeItem:removeItemFromCardHandler,
    }
   
    return <CartContext.Provider value={cardContext}>
        {props.children}
    </CartContext.Provider>
};
export default CardProvider