import React , {useRef, useState} from "react";
import Input from "../../UI/Input";
import style from './MealItemForm.module.css';
const MealItemForm = props =>{
    const [amoutIsValid , setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const addSubmitHandler = event =>{
        event.preventDefault();
        const enteredAmount =amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 || 
        enteredAmountNumber > 5){
            setAmountIsValid(false)
            return;
        }    
        props.onAddtoCard(enteredAmountNumber);    
    };
   

    return(
        <form className={style.form} onSubmit={addSubmitHandler}>
            <Input label="Amount" input={{id:'amount' , type:"number" , min:'1' ,max:"5" ,step:"1" , defaultValue:"1"}} ref={amountInputRef}/>
            <button> + Add</button>
            {!amoutIsValid &&  <p>Please enter a valid amount (1-5) amount</p> }
        </form>
    )
}
export default MealItemForm;