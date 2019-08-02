import { createSelector } from "reselect";

// Input Selector
const selectCart = ({ cart }) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity, 0)
);
