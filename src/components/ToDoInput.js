import styles from './ToDoInput.module.css';
import Button from './Button';

const ToDoInput = props => {
    return (
        <form>
            <div  className={styles['form-control']}>
                <label>To do</label>
                <input placeholder='type something'></input>
            </div>
            <Button type='submit'>Add</Button>
        </form>
    );
}

export default ToDoInput;