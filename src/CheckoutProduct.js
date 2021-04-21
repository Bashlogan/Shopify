import React from "react";
import "./CheckoutProduct.css";
import Counter from "./Counter";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function CheckoutProduct({ id, title, price, image, rating, qty }) {
  const dispatch = useStateValue()[1];

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

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
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        <button onClick={removeFromBasket}>Remove from Basket</button>
        <div className="checkoutProduct__counter">
          <Counter addToBasket={addToBasket} id={id} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
