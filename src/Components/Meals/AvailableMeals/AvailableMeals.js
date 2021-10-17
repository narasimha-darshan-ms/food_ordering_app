import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem';
import Card from '../../General_UI_elements/Card'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'idli',
      description: 'A South Indian dish',
      price: 25,
    },
    {
      id: 'm2',
      name: 'dosa',
      description: 'Another South Indian dish',
      price: 30,
    }
  ];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price={meal.price}
    />)
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
