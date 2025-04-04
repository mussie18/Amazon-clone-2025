import { Type } from "./actionTypes";

export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedCart = state.cart.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          cart: updatedCart,
        };
      }
    default:
      return state;
  }
};
