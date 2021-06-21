import { useEffect, useState } from "react";
import Card from "../UI/Card";
import Styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getavailablemeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-http-d5d4d-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      console.log(responseData);
      let loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    getavailablemeals();
  }, []);

  const mealslist = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mealname={meal.name}
      mealprice={meal.price}
      mealdescription={meal.description}
    />
  ));
  return (
    <section className={Styles.meals}>
      {isLoading ? (
        <p className={Styles.mealsLoading}>Loading Meals</p>
      ) : (
        <Card>
          <ul>{mealslist}</ul>
        </Card>
      )}
    </section>
  );
};
export default AvailableMeals;
