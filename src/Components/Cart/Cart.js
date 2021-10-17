import classes from './Cart.module.css';
import React from 'react';
import Modal from '../General_UI_elements/Modal/Modal';
import { useDispatch } from 'react-redux';

const Cart = (props) => {
  const DUMMY_ARRAY = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]

  const cartItems = (
    <ul className={classes['cart-items']}>
      {DUMMY_ARRAY.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
	
	const dispatch = useDispatch()
	const cartCloseHandler = () => {		dispatch({	type: "closeCART"	})	}

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartCloseHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart