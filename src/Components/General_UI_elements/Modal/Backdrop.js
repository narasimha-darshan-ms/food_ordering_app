import React from 'react'
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';

export default function Backdrop() {
    const dispatch = useDispatch();
    
    const cartCloseHandler = () => {		dispatch({	type: "closeCART"	})	}

    return (
        <div className={classes.backdrop} onClick={cartCloseHandler}/>
    )
}
