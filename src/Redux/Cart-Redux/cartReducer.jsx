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
      // return { ...state, cart: [...state.cart, action.payload] };

      // const updatedCart1 = [...state.cart, action.payload];
      // console.log(updatedCart1);
      // return { ...state, cart: updatedCart1 };

      const { id, quantities } = action.payload;
      const updatedCart1 = [...state.cart];
      const existingProductIndex = updatedCart1.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, update its quantity
        updatedCart1[existingProductIndex].quantities += quantities;
      } else {
        // If the product is not in the cart, add it
        updatedCart1.push(action.payload);
      }

      return { ...state, cart: updatedCart1 };

    case "REMOVE-CART":
      const updatedCart = [...state.cart];
      updatedCart.splice(action.payload, 1); // Remove item at the specified index
      console.log(updatedCart);
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
