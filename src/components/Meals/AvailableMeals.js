import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer",
    description: "Spicy",
    price: 220,
  },
  {
    id: "m2",
    name: "Roti",
    description: "Tawa",
    price: 5,
  },
  {
    id: "m3",
    name: "Rice",
    description: "Jeera",
    price: 40,
  },
  {
    id: "m4",
    name: "Gulab Jamun",
    description: "Black",
    price: 15,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;