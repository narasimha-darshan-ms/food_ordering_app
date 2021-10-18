import classes from './Cart.module.css';
import React from 'react';
import Modal from '../General_UI_elements/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props) => {
	const dispatch = useDispatch()
  
	const cartCloseHandler = () => {		dispatch({	type: "closeCART"	})	}
  const cartItemQuantityIncrementHandler = (key) => {    dispatch({  type:'incrementCartItemQuantity', key  })    }
  const cartItemQuantityDecrementHandler = (key) => {    dispatch({  type:'decrementCartItemQuantity', key  })    }

  const CartItems = useSelector(state => state.cartItems)
  const cartTotalPrice = useSelector(state => state.totalPrice)

  const cartItemsElement = (
    <ul className={classes['cart-items']}>
      {CartItems.map((item) => (
        <CartItem 
          key={item.key} 
          name={item.name} 
          pricePerQuantity={item.pricePerQuantity} 
          ItemQuantity={item.ItemQuantity} 
          totalPrice={item.totalPrice}
          onRemove={()=>cartItemQuantityDecrementHandler(item.key)}
          onAdd={()=>cartItemQuantityIncrementHandler(item.key)}
          />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItemsElement}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`₹${cartTotalPrice}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartCloseHandler}>Close</button>
        {CartItems.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart