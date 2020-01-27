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
    case cartTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCartHelper(state.cartItems, action.payload)
      };
    case cartTypes.CLEAR_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => {
          return cartItem.id !== action.payload;
        })
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
const deleteItemFromCartHelper = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => {
    return cartItem.id === item.id;
  });
  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => {
      return cartItem.id !== item.id;
    });
  }
  if (existingItem.quantity > 1) {
    return cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem; // безполезное действие
      }
    });
  }
};

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
