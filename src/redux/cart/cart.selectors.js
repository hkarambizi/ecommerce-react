import { createSelector } from "reselect";

// Input Selector
const selectCart = ({ cart }) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accQty, cartItem) => accQty + cartItem.quantity * cartItem.price,
      0
    )
);
