import CatalogTypes from './catalog.types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMessage: undefined
};

const catalogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CatalogTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };
    case CatalogTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case CatalogTypes.FETCH_COLLECTION_FAILURE:
      return {
        isFetching: true,
        errorMessage: action.payload
      };
    case CatalogTypes.CLEAR_COLLECTION:
      return {
        ...state,
        isFetching: false,
        data: []
      };
    default:
      return state;
  }
};

export default catalogReducer;
