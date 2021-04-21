import React from "react";
import Counter from "./Counter";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const basketIndex = state.basket.findIndex(
    (basketItem) => basketItem.item.id === id
  );

  var check = 0;

  if (basketIndex === -1 || state.basket[basketIndex].qty === 0) {
    check = true;
  } else {
    check = false;
  }

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="">
                <StarIcon />
              </span>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <span key={i + rating} role="img" aria-label="">
                <StarBorderIcon />
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      {check && <button onClick={addToBasket}>Add to Basket</button>}
      {!check && <Counter addToBasket={addToBasket} id={id} />}
    </div>
  );
}

export default Product;
