import React, { Fragment } from 'react'
import mealImage from '../../asset/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton.js'

export default function Header() {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Meals" />
            </div>
        </Fragment> )
}
