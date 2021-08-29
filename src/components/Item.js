import styles from './Item.module.css';

const Item = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <li className={styles.list} onClick={deleteHandler}>{props.children}</li>
    );
}

export default Item;