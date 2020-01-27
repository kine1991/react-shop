import cartTypes from './cart.types';

export const addItemToCart = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
});

export const deleteItemFromCart = item => ({
  type: cartTypes.DELETE_ITEM,
  payload: item
});

export const clearItemFromCart = itemId => ({
  type: cartTypes.CLEAR_ITEM_CART,
  payload: itemId
});

export const loadCartFromLS = items => ({
  type: cartTypes.LOAD_CART_FROM_LS,
  payload: items
});

export const saveItemToCartLS = item => ({
  type: cartTypes.SAVE_ITEM_TO_CART_LS,
  payload: item
});
