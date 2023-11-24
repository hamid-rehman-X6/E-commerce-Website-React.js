export const incrementQuantity = () => ({
  type: "INCREMENT_QUANTITY",
});

export const decrementQuantity = () => ({
  type: "DECREMENT_QUANTITY",
});

export const addToCart = (product, quantity) => ({
  type: "ADD_TO_CART",
  payload: { item: product, quantities: quantity },
});

export const removefromCart = () => ({
  type: "REMOVE-CART",
});

export const IncreCartitem = (index) => ({
  type: "INCREMENT_CART_ITEM",
  payload: index,
});
export const DecreCartitem = (index) => ({
  type: "DECREMENT_CART_ITEM",
  payload: index,
});

export const ResetCart = () => ({
  type: "RESET_CART",
});
