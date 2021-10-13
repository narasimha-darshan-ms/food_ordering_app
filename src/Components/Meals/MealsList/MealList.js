import React, {Fragment} from 'react'
import AvailableMeals from '../AvailableMeals/AvailableMeals.js'
import MealsSummary from '../MealsSummary/MealsSummary.js'

export default function MealList() {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}
