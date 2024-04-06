import styles from "./Item.module.css";

const Item = (props) => {
  // let { foodItem } = props;

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{props.foodItem}</span>
    </li>
  );

  // return <li className="list-group-item">{foodItem}</li>;
};

export default Item;
