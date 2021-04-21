export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce(
    (amount, item) => amount + item.item.price * item.qty,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const basketIndex = state.basket.findIndex(
        (basketItem) => basketItem.item.id === action.item.id
      );

      let newBasket = [...state.basket];

      if (basketIndex !== -1) {
        newBasket[basketIndex] = { ...newBasket[basketIndex] };
        newBasket[basketIndex].qty++;
      } else {
        newBasket = [...state.basket, { item: action.item, qty: 1 }];
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.item.id === action.id
      );

      let modifiedBasket = [...state.basket];

      if (index !== -1) {
        modifiedBasket.splice(index, 1);
      } else {
        console.warn("Cannot delete item");
      }

      return {
        ...state,
        basket: modifiedBasket,
      };

    case "DECREMENT_ITEM":
      const count = state.basket.findIndex(
        (basketItem) => basketItem.item.id === action.id
      );

      let netBasket = [...state.basket];

      if (count !== -1) {
        netBasket[count] = { ...netBasket[count] };
        netBasket[count].qty--;
      } else {
        console.warn("Cannot delete item");
      }

      return {
        ...state,
        basket: netBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
