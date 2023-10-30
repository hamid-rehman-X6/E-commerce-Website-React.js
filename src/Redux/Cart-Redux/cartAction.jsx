export const incrementQuantity = () => ({
  type: "INCREMENT_QUANTITY",
});

export const decrementQuantity = () => ({
  type: "DECREMENT_QUANTITY",
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removefromCart = () => ({
  type: "REMOVE-CART",
});
