import {useState} from 'react';
import styles from './ToDoInput.module.css';
import Button from './Button';

const ToDoInput = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const onChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsValid(true);
        if(enteredValue.trim().length === 0) { // caso usuario nao tenha digitado nada
            setIsValid(false);
            console.log(isValid); //
            return;
        }
        props.onAddItem(enteredValue);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>To do</label>
                <input placeholder='type something' onChange={onChangeHandler}></input>
            </div>
            <Button type='submit'>Add</Button>
        </form>
    );
}

export default ToDoInput;