import styles from "./ItemList.module.css";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul className={styles.list}>
      {props.text.map((item) => (
        <Item key={item.id} id={item.id} onDelete={props.onDeleteItem}>
          {item.text}
        </Item>
      ))}
    </ul>
  );
};

export default ItemList;
