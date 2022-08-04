import React, { useEffect, useState } from 'react'
import classes from "./AvailableMeals.module.css"
import MealItems from "./MealItems/MealItems"
import Card from '../UI/Card';


const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoding, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState();


    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("https://food-order-app-e2ce8-default-rtdb.firebaseio.com/meals.json")
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error("Something Went Wrong!");
            }
            const loadedMeal = [];
            

            for (const key in responseData) {
                loadedMeal.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,


                })
            }
            setMeals(loadedMeal);
            setIsLoading(false);
        }

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (isLoding) {
        return (
            <section className={classes.loading}>
                <p>Loading...</p>
            </section>
        )
    }

    if (httpError) {
        return (
            <section className="classes.error">
                <p>{httpError}</p>
            </section>

        );
    }
    const mealsList = meals.map((meal) => (
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
    );
};

export default AvailableMeals;