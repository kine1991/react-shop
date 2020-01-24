import userTypes from './user.types';
import { auth, firestore, signInWithGoogle } from '../../firebase/firebase.utils';

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

// SIGN UP WITH GOOGLE
const signUpWithGoogleStart = () => ({
  type: userTypes.SIGN_UP_WITH_GOOGLE_START
});

const signUpWithGoogleSuccess = () => ({
  type: userTypes.SIGN_UP_WITH_GOOGLE_SUCCESS
});

const signUpWithGoogleFailure = error => ({
  type: userTypes.SIGN_UP_WITH_GOOGLE_FAILURE,
  payload: error
});

export const signUpWithGoogleAsync = () => async dispatch => {
  dispatch(signUpWithGoogleStart());
  try {
    const userData = await signInWithGoogle();

    if (userData.additionalUserInfo.isNewUser) {
      setUserProfile({
        email: userData.user.email,
        fullName: userData.user.displayName,
        imageUrl: userData.user.photoURL,
        userId: userData.user.uid,
        dispatch
      });
    } else {
      dispatch(signUpWithGoogleSuccess());
    }
  } catch (error) {
    dispatch(signUpWithGoogleFailure(error));
  }
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

// EDIT PROFILE
const editProfileSuccess = changedData => ({
  type: userTypes.EDIT_PROFILE_SUCCESS,
  payload: changedData
});

const editProfileFailure = error => ({
  type: userTypes.EDIT_PROFILE_FAILURE,
  payload: error
});

export const editProfileAcync = data => async dispatch => {
  const { fullName, imageUrl, userId } = data;
  try {
    await firestore
      .collection('profiles')
      .doc(userId)
      .update({
        fullName,
        imageUrl
      });
    dispatch(editProfileSuccess({ fullName, imageUrl }));
  } catch (error) {
    dispatch(editProfileFailure(error));
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
