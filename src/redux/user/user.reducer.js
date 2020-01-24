import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isFetching: false,
  isFetchingForBtn: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER_START:
      return {
        ...state,
        isFetching: true
        // currentUser: null
      };
    case userTypes.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload
      };
    case userTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // LOGIN
    case userTypes.LOGIN_START:
      return {
        ...state,
        isFetchingForBtn: true
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetchingForBtn: false
      };
    case userTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetchingForBtn: false,
        error: action.payload
      };

    // REGISTER
    case userTypes.REGISTER_START:
      return {
        ...state,
        isFetchingForBtn: true
      };
    case userTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isFetchingForBtn: false
      };
    case userTypes.REGISTER_FAILURE:
      return {
        ...state,
        isFetchingForBtn: false,
        error: action.payload
      };

    // SING UP WITH GOOGLE
    case userTypes.SIGN_UP_WITH_GOOGLE_START:
      return {
        ...state,
        isFetchingForBtn: true
      };
    case userTypes.SIGN_UP_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        isFetchingForBtn: false
      };
    case userTypes.SIGN_UP_WITH_GOOGLE_FAILURE:
      return {
        ...state,
        isFetchingForBtn: false,
        error: action.payload
      };

    // EDIT PROFILE
    case userTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload }
      };
    case userTypes.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    // LOGOUT
    case userTypes.LOG_OUT_START:
      return {
        ...state,
        isFetching: true
      };
    case userTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case userTypes.LOG_OUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
