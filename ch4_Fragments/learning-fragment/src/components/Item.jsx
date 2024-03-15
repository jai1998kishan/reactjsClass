const Item = (props) => {
  // let { foodItem } = props;

  return <li className="list-group-item">{props.foodItem}</li>;

  // return <li className="list-group-item">{foodItem}</li>;
};

export default Item;
