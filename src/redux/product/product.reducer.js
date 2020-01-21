import ProductTypes from './product.types';

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  error: null
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case ProductTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case ProductTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ProductTypes.CLEAR_PRODUCT:
      return {
        ...state,
        isFetching: false,
        data: null
      };
    default:
      return state;
  }
};

export default productReducer;
