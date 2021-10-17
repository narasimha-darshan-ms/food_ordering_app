import classes from './Cart.module.css';
import React from 'react';
import Modal from '../General_UI_elements/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {
	const dispatch = useDispatch()
	const cartCloseHandler = () => {		dispatch({	type: "closeCART"	})	}

  const CartItems = useSelector(state => state.cartItems)
  const cartTotalPrice = useSelector(state => state.totalPrice)

  const cartItemsElement = (
    <ul className={classes['cart-items']}>
      {CartItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItemsElement}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartTotalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartCloseHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart