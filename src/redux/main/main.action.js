import MainTypes from "./main.types";
import { firestore } from '../../firebase/firebase.utils';

export const getMainDataStart = () => ({
    type: MainTypes.FETCH_MAIN_DATA_START
});

export const getMainDataSuccess = data => ({
    type: MainTypes.FETCH_MAIN_DATA_SUCCESS,
    payload: data
});

export const getMainDataFailure = error => ({
    type: MainTypes.FETCH_MAIN_DATA_FAILURE,
    payload: error
});


export const getMainDataAsync = () => (dispatch, getState) => {
    // кеширование
    // const cacheMainData = getState().main.data;
    // if(cacheMainData.length > 0){
    //     dispatch(getMainDataSuccess(cacheMainData))
    //     return
    // }
    // console.log('getState', cacheMainData);
    
    const docRef = firestore.collection("maindata");
    dispatch(clearData())
    dispatch(getMainDataStart())

    docRef.get()
    .then(querySnapshot => {
        const arr = [];
        querySnapshot.forEach(function(doc) {
            arr.push({id: doc.id, ...doc.data()}) 
        })
        dispatch(getMainDataSuccess(arr))
    })
    .catch(error => dispatch(getMainDataFailure(error)))
}

export const clearData = () => ({
    type: MainTypes.CLEAR_DATA,
    payload: []
});