const initialState = {
  quantities: 0,
  cart: [],
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return { ...state, quantities: state.quantities + 1 };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        quantities: state.quantities > 0 ? state.quantities - 1 : 0,
      };

    case "ADD_TO_CART":
      const updatedCart1 = [...state.cart, action.payload];
      return { ...state, cart: updatedCart1 };

    case "REMOVE-CART":
      const updatedCart = [...state.cart];
      updatedCart.splice(action.payload, 1); // Remove item at the specified index
      console.log(updatedCart);
      return { ...state, cart: updatedCart };

    case "INCREMENT_CART_ITEM":
      const itemcart1 = state.cart.map((item, index) => {
        if (index === action.payload) {
          return { ...item, quantities: item.quantities + 1 };
        }
        return item;
      });
      return { ...state, cart: itemcart1 };

    case "DECREMENT_CART_ITEM":
      const itemcart2 = state.cart.map((item, index) => {
        if (index === action.payload && item.quantities > 0) {
          return { ...item, quantities: item.quantities - 1 };
        }
        return item;
      });
      return { ...state, cart: itemcart2 };

    case "RESET_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
