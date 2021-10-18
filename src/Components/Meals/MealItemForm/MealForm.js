import React, {useState} from 'react'
import classes from './MealForm.module.css'
import Input from '../../General_UI_elements/Input.js'
import { useDispatch } from 'react-redux';

export default function MealForm(props) {
    const dispatch = useDispatch()
    const [ItemQuantity, setItemQuantity] = useState(1)
    const [validAmount, setValidAmount] = useState(true)

    function formSubmissionHandler(event){
        event.preventDefault()
    }

    function addButtonClickHandler(event){
        event.preventDefault();

        if(parseInt(ItemQuantity) > 5 || parseInt(ItemQuantity) < 1 || isNaN(parseInt(ItemQuantity))){
            setValidAmount(false)
            return
        }
        else{
            setValidAmount(true)
            const item = {
                key: props.id,
                name: props.name,
                pricePerQuantity: props.price,
                ItemQuantity: parseInt(ItemQuantity),
                totalPrice: props.price * parseInt(ItemQuantity)
            }

            const addItemstoCartACTION = {
                type: 'addItemstoCart',
                item
            }

            dispatch(addItemstoCartACTION);
        }
    }
    
    return (
        <form className={classes.form} action={formSubmissionHandler}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                    value: ItemQuantity,
                    onChange: (e) => setItemQuantity(e.target.value)
                }}
            />
            <button onClick={addButtonClickHandler}>    + Add   </button>
            {!validAmount && <p className={classes.error}> Enter valid quantity: 1 to 5</p>}
        </form>
    )
}
