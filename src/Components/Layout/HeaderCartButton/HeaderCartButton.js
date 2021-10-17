import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon.js'
import { useDispatch }  from 'react-redux';

export default function HeaderCartButton(props) {
    const dispatch = useDispatch()
    
    const cartClickHandler = () => {    dispatch({type: 'onClickCartButton'})   }

    return (
        <button className={classes.button} onClick={cartClickHandler}>
            <span className={classes.icon}>     <CartIcon />    </span>
            <span>  Cart    </span>
            <span className={classes.badge}>    {0}     </span>
        </button>
    )
}
