import React from 'react'
import classes from './MealsItem.module.css'
import MealForm from '../MealItemForm/MealForm'

export default function MealItem(props) {
    const price = `₹${props.price.toFixed(2)}`
    
    return (
        <li className={classes.meal}>
            <div>   
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm 
                    key={props.id} 
                    id={props.id}
                    name={props.name}
                    price={props.price}
                />
            </div>
        </li>
    )
}
