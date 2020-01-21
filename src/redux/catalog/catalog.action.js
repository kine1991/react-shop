import CatalogTypes from './catalog.types';
import { firestore } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: CatalogTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = data => ({
  type: CatalogTypes.FETCH_COLLECTION_SUCCESS,
  payload: data
});

export const fetchCollectionFailure = error => ({
  type: CatalogTypes.FETCH_COLLECTION_FAILURE,
  payload: error
});

export const clearCollection = () => ({
  type: CatalogTypes.FETCH_COLLECTION_FAILURE
  // payload: 'xxx'
});

export const fetchCollectionAsync = () => (dispatch, getState) => {
  const docRef = firestore.collection('shop_cars');
  dispatch(clearCollection());
  dispatch(fetchCollectionStart());
  docRef
    .get()
    .then(querySnapshot => {
      const arr = [];
      querySnapshot.forEach(function(doc) {
        arr.push({ id: doc.id, ...doc.data() });
      });
      dispatch(fetchCollectionSuccess(arr));
    })
    .catch(error => dispatch(fetchCollectionFailure(error)));
};
