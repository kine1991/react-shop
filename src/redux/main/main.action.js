import MainTypes from "./main.types";

// export const getMainData = data => ({
//     type: MainTypes.GET_MAIN_DATA,
//     payload: data
// });

export const getMainData = data => {
    return dispatch => {
        
    }
}

export const clearData = () => ({
    type: MainTypes.CLEAR_DATA,
    payload: []
});