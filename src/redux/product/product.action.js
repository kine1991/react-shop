import ProductTypes from './product.types';
import { firestore } from '../../firebase/firebase.utils';

export const fetchProductStart = () => ({
    type: ProductTypes.FETCH_PRODUCT_START
});

export const fetchProductSuccess = (data) => ({
    type: ProductTypes.FETCH_PRODUCT_SUCCESS,
    payload: data
});

export const fetchProductFailure = (error) => ({
    type: ProductTypes.FETCH_PRODUCT_FAILURE,
    payload: error
});

export const clearProduct = () => ({
    type: ProductTypes.CLEAR_PRODUCT
});

export const fetchProductAsync = (productId) => (dispatch, getState) => {
    // кеширование
    // const cacheProductData = getState().product.data;
    // if((cacheProductData.id || 1) === productId){
    //     dispatch(fetchProductSuccess(cacheProductData))
    //     return
    // }

    dispatch(clearProduct());
    dispatch(fetchProductStart());
    const docRef = firestore.collection("cars").doc(productId);
    docRef.get()
    .then(item => {
        dispatch(fetchProductSuccess({id: item.id, ...item.data()}))
    })
    .catch(error => {
        dispatch(fetchProductFailure(error));
    })
};