const initialState = {
  quantities: [],
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
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE-CART":
      const updatedCart = [...state.cart];
      updatedCart.splice(action.payload, 1); // Remove item at the specified index
      console.log(updatedCart);
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
