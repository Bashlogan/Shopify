import React from "react";
import "./Counter.css";
import { useStateValue } from "./StateProvider";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Counter({ addToBasket, id }) {
  const [state, dispatch] = useStateValue();
  const productInfo = state.basket.filter(
    (basketItem) => basketItem.item.id === id
  );
  const qty = productInfo[0].qty;

  const check = true ? qty === 1 : false;

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const decrementItem = () => {
    dispatch({
      type: "DECREMENT_ITEM",
      id: id,
    });
  };

  return (
    <div className="counter">
      {!check && <RemoveIcon onClick={decrementItem} />}
      {check && <DeleteOutlineIcon onClick={removeFromBasket} />}{" "}
      <span>{qty} </span>
      <AddIcon onClick={addToBasket} />
    </div>
  );
}

export default Counter;
