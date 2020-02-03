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

export const fetchCollectionFilterAsync = filter => async dispatch => {
  // dispatch(fetchCollectionStart());
  if (filter) {
    const allFilterValue = [];
    Object.keys(filter).forEach(field => {
      if (filter[field].length) {
        filter[field].forEach(value => {
          allFilterValue.push(value);
        });
      }
    });

    // Helper
    const helperCutArrays = async (filterPromises, dispatch) => {
      const arrayByFiltering = await Promise.all(filterPromises);
      const obj = {};
      arrayByFiltering.forEach((querySnapshot, i) => {
        obj[`arr-${i}`] = [];
        querySnapshot.forEach(res => {
          obj[`arr-${i}`].push({ id: res.id, ...res.data() });
        });
      });

      let filteredObj;
      Object.keys(obj).forEach((field, i) => {
        if (!i) {
          filteredObj = obj[field];
        } else {
          filteredObj = filteredObj.filter(item => {
            const arrMap = obj[field].map(o => o.id);
            return arrMap.includes(item.id);
          });
        }
      });
      dispatch(fetchCollectionSuccess(filteredObj));
      // console.log('filteredObj', filteredObj);
    };

    // if filter apply
    if (allFilterValue.length) {
      const filterPromises = [];
      Object.keys(filter).forEach(async field => {
        if (filter[field].length) {
          const collectionRef = firestore
            .collection('shop_cars')
            .where(`property.${field}.value`, 'in', filter[field])
            .get();

          filterPromises.push(collectionRef);
        }
      });
      helperCutArrays(filterPromises, dispatch);
      // if filter not apply
    } else {
      const docRef = firestore.collection('shop_cars');
      // dispatch(clearCollection());
      // dispatch(fetchCollectionStart());
      try {
        const querySnapshot = await docRef.get();
        const arr = [];
        querySnapshot.forEach(function(doc) {
          arr.push({ id: doc.id, ...doc.data() });
        });
        dispatch(fetchCollectionSuccess(arr));
      } catch (error) {
        dispatch(fetchCollectionFailure(error));
      }
    }
  }
};

// // if filter apply
// if (allFilterValue.length) {
//   const filterPromises = [];
//   Object.keys(filter).forEach(field => {
//     if (filter[field].length) {
//       // console.log('field', field);
//       filter[field].forEach(value => {
//         // console.log(field, value);
//         filterPromises.push(
//           firestore
//             .collection('shop_cars')
//             .where(`property.${field}.value`, '==', `${value}`)
//             .get()
//         );
//       });
//     }
//   });
//   const arrayByFiltering = await Promise.all(filterPromises);
//   try {
//     const arr = [];
//     arrayByFiltering.forEach(querySnapshot => {
//       querySnapshot.forEach(function(doc) {
//         const found = arr.some(el => el.id === doc.id); // если в массиве есть елемент с таким id то не добавлять
//         if (!found) arr.push({ id: doc.id, ...doc.data() });
//       });
//     });
//     // dispatch(fetchCollectionSuccess(arr));
//   } catch (error) {
//     // dispatch(fetchCollectionFailure(error));
//   }

//   // if filter not apply
// }

// console.log('field', field);
// console.log(field, filter[field]);

// const collectionRef = firebase.firestore().collection('Books')
// collectionRef.where('d.details.BookType',"==",BookType)
// collectionRef = collectionRef.where('d.details.bookage',"<=",age)
// collectionRef = collectionRef.orderBy('d.details.bookage')
// collectionRef.orderBy('g').startAt(query[0]).endAt(query[1])
// .where(`property.color.value`, 'in', ['blue', 'white'])
// .where(`property.bodyStyle.value`, 'in', ['suv'])
// .where('brand', '==', 'honda')
// .where('brand', '==', 'honda')
// .where()
// .where('model', '==', 'CR-V')
// .where(`property.${field}.value`, 'in', filter[field])
