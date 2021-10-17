import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon.js'
import { useDispatch, useSelector }  from 'react-redux';

export default function HeaderCartButton(props) {
    const dispatch = useDispatch()
    const numberOfItemsInCart = useSelector(state => state.numberOfItemsInCart)
    
    const cartClickHandler = () => {    dispatch({type: 'onClickCartButton'})   }

    return (
        <button className={classes.button} onClick={cartClickHandler}>
            <span className={classes.icon}>     <CartIcon />    </span>
            <span>  Cart    </span>
            <span className={classes.badge}>    {numberOfItemsInCart}     </span>
        </button>
    )
}
