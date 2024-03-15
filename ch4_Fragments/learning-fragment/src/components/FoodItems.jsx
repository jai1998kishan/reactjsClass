import Item from "./Item";

let FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
