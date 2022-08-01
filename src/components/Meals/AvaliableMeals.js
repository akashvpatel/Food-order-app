import React from 'react'
import classes from "./AvailableMeals.module.css"
import MealItems from "./MealItems/MealItems"
import Card from '../UI/Card';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pav Bhaji',
        description: 'Pav bhaji is a hearty, delightsome.',
        price: 80,
    },
    {
        id: 'm2',
        name: 'Chholle Bhature',
        description: 'It comes with Bhatura(2pc),chhole(200gms),Aloo sabji,onion, Achar & Mirchi',
        price: 60,
    },
    {
        id: 'm3',
        name: 'Cheesy Margherita Pizza.',
        description: 'Pizza Sauce, Mozzarella & White Cheddar',
        price: 100,
    },
    {
        id: 'm4',
        name: 'Cheese Corn Bread',
        description: 'Cheese, Garlic, Corn & Herb',
        price: 85,
    },
];

const AvaliableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItems
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />
    ));
    return (
        <section className={classes.meals} >
            <h1>Our best food</h1>
            <Card>
                <ul>{mealsList}</ul>

            </Card>


        </section>
    )
}

export default AvaliableMeals