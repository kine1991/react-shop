import userTypes from './user.types';
import { auth, firestore } from '../../firebase/firebase.utils';

// SET CURRENT USER
const setCurrentUserStart = () => ({
  type: userTypes.SET_CURRENT_USER_START
});

const setCurrentUserSuccess = userData => ({
  type: userTypes.SET_CURRENT_USER_SUCCESS,
  payload: userData
});

const setCurrentUserFailure = error => ({
  type: userTypes.SET_CURRENT_USER_FAILURE,
  payload: error
});

export const setCurrentUserAsync = () => dispatch => {
  dispatch(setCurrentUserStart());
  auth.onAuthStateChanged(
    async userData => {
      if (userData) {
        const profileData = await getUserProfile({ userId: userData.uid });
        dispatch(setCurrentUserSuccess(profileData));
      } else {
        dispatch(setCurrentUserSuccess(null));
      }
    },
    error => {
      dispatch(setCurrentUserFailure(error));
    }
  );
};

// LOGIN
const loginStart = () => ({
  type: userTypes.LOGIN_START
});

const loginSuccess = () => ({
  type: userTypes.LOGIN_SUCCESS
});

const loginFailue = error => ({
  type: userTypes.LOGIN_FAILURE,
  payload: error
});

export const loginAsync = ({ email, password }) => async dispatch => {
  dispatch(loginStart());

  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailue());
  }
};

// REGISTER
const registerStart = () => ({
  type: userTypes.REGISTER_START
});

const registerSuccess = () => ({
  type: userTypes.REGISTER_SUCCESS
});

const registerFailue = error => ({
  type: userTypes.REGISTER_FAILURE,
  payload: error
});

export const registerAsync = ({ email, password, ...rest }) => async dispatch => {
  dispatch(registerStart());

  try {
    const userData = await auth.createUserWithEmailAndPassword(email, password);
    setUserProfile({ email, ...rest, userId: userData.user.uid, dispatch });
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailue(error));
  }
};

// LOGOUT
const logoutStart = () => ({
  type: userTypes.LOG_OUT_START
});

const logoutSuccess = () => ({
  type: userTypes.LOG_OUT_SUCCESS
});
const logoutFailure = error => ({
  type: userTypes.LOG_OUT_FAILURE,
  payload: error
});

export const logoutAsync = () => async dispatch => {
  dispatch(logoutStart());
  try {
    await auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};

// HELPER FUNCTIONS
const setUserProfile = async ({ email, fullName, imageUrl, userId, dispatch }) => {
  const profileRef = firestore.collection('profiles').doc(userId);

  try {
    await profileRef.set({
      email: email,
      fullName: fullName,
      imageUrl: imageUrl,
      id: userId
    });
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailue(error));
  }
};

const getUserProfile = async ({ userId }) => {
  const profileRef = firestore.collection('profiles').doc(userId);
  const userProfile = await profileRef.get();
  return { id: userProfile.id, ...userProfile.data() };
};
