import cartTypes from './cart.types';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCardHelper(state.cartItems, action.payload)
      };
    case cartTypes.LOAD_CART_FROM_LS:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

// HELPER
const addItemToCardHelper = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => {
    return cartItem.id === item.id;
  });
  if (existingItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export default cartReducer;
