import React from "react";
import Card from "../UI/Card";
import style from './AvailableMeals.module.css';
import MealItem from "./MealItems/MealItems";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Gheme',
      description: 'iranian food ... served with rice !',
      price: 62.99,

    },
    {
      id: 'm6',
      name: 'AdasPolo',
      description: 'iranian food...!',
      price: 62.38,

    },
    {
      id: 'm7',
      name: 'Soup',
      description: 'Healthy...  with vegetables',
      price: 32.49,

    },
    {
      id: 'm8',
      name: 'Halim',
      description: 'Iranian food...~',
      price: 50.03,

    },

  ];
const AvailabelMeal = () =>{
    const mealsList = DUMMY_MEALS.map(meal => <MealItem name={meal.name} key={meal.id} id={meal.id} description={meal.description} price={meal.price} />)
    return(
        <section className={style.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
}
export default AvailabelMeal;