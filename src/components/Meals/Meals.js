import React from "react";
import MealsSummary from './MealsSummary';
import AvailabelMeal from "./AvailableMeals";
const Meals = () => {
    return(
        <React.Fragment>
            <MealsSummary/>
            <AvailabelMeal/>
        </React.Fragment>
    )
}
export default Meals;