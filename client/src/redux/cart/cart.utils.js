export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );
  const oneItemLeft = cartItems.find(
    () => existingCartItem && itemToRemove.quantity === 1
  );
  if (oneItemLeft) {
    return clearItemFromCart(cartItems, itemToRemove);
  }
  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
