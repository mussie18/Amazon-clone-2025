import { Type } from "./actionTypes";

export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};
