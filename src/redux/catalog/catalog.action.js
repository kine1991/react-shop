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

export const fetchCollectionFilterAsync = filter => dispatch => {
  if (filter) {
    console.log('filter');
    console.log(filter);
    const filterBy = [];
    const filterPromises = [];
    Object.keys(filter).forEach(field => {
      if (filter[field].length) {
        console.log('field', field);
        filter[field].forEach(value => {
          // console.log(field, value);
          filterPromises.push(
            firestore
              .collection('shop_cars')
              .where(`property.${field}.value`, '==', `${value}`)
              .get()
          );
        });
        // filterBy[field] = filter[field];
        // filterPromises.push(firestore.collection('shop_cars').where(`${field}`, '==', ``));
      }
    });
    Promise.all(filterPromises)
      .then(arrayByFiltering => {
        const arr = [];
        arrayByFiltering.forEach(querySnapshot => {
          querySnapshot.forEach(function(doc) {
            const found = arr.some(el => el.id === doc.id); // если в массиве есть елемент с таким id то не добавлять
            if (!found) arr.push({ id: doc.id, ...doc.data() });
          });
        });
        dispatch(fetchCollectionSuccess(arr));
        console.log('arr', arr);
      })
      .catch(error => dispatch(fetchCollectionFailure(error)));
    // console.log('filterBy', filterBy);
    // console.log('filterPromises', filterPromises);
    // console.log('filterBy', Object.keys(filterBy));

    // const dbPromises = [];
  }
  // const dbPromises = [];
  // for (let i = 0; i < filter.color.length; i++) {
  //   console.log(filter.color);
  //   // dbPromises.push(
  //   //   firestore
  //   //     .collection('shop_cars')
  //   //     .where('property.color.value', '==', 0)
  //   //     .get()
  //   // );
  // }

  // Promise.all(dbPromises);





  // const docRef = firestore.collection('shop_cars').where('property.color.value', '==', 'white');

  // // dispatch(clearCollection());
  // // dispatch(fetchCollectionStart());
  // docRef
  //   .get()
  //   .then(querySnapshot => {
  //     // console.log('querySnapshot');
  //     // console.log(querySnapshot);
  //     const arr = [];
  //     querySnapshot.forEach(function(doc) {
  //       arr.push({ id: doc.id, ...doc.data() });
  //     });
  //     dispatch(fetchCollectionSuccess(arr));
  //   })
  //   .catch(error => dispatch(fetchCollectionFailure(error)));
};
