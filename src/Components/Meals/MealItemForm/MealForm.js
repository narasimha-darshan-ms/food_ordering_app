import React from 'react'
import classes from './MealForm.module.css'
import Input from '../../General_UI_elements/Input.js'

export default function MealForm(props) {

    function formSubmissionHandler(event){
        event.preventDefault()
    }

    function addButtonClickHandler(event){
        event.preventDefault();
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
                }}
            />
            <button onClick={addButtonClickHandler}>    + Add   </button>
        </form>
    )
}
