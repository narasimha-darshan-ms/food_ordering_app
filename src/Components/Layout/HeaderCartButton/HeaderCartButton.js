import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon.js'

export default function HeaderCartButton() {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>     <CartIcon />    </span>
            <span>  Cart    </span>
            <span className={classes.badge}>    {0}     </span>
        </button>
    )
}
