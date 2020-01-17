import MainTypes from './main.types';

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    errorMessage: undefined
};
  
const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MainTypes.FETCH_MAIN_DATA_START:
      return { 
          ...state, 
          isFetching: true,
      };
    case MainTypes.FETCH_MAIN_DATA_SUCCESS:
      return { 
          ...state, 
          isFetching: false,
          data: action.payload
          // data: [...state.data, ...action.payload ]
      };
    case MainTypes.FETCH_MAIN_DATA_FAILURE:
      return { 
          ...state, 
          isFetching: false,
          errorMessage: action.payload
      };
    case MainTypes.CLEAR_DATA:
      return { 
          ...state,
          data: action.payload
      };
    default:
      return state;
  }
};
  
  export default mainReducer;

//   export const mainPageData = {
//     data: [
//       {
//         title: 'Cars',
//         imageUrl: 'https://i.ibb.co/6JvdXrj/car5.png',
//         id: 1,
//         linkUrl: 'cars'
//       },
//       {
//         title: 'Motorcycles',
//         imageUrl: 'https://i.ibb.co/YTfq74p/motocycle1.jpg',
//         id: 2,
//         linkUrl: 'motorcycles'
//       },
//       {
//         title: 'ATV',
//         imageUrl: 'https://i.ibb.co/m4YjZKW/atv2.png',
//         id: 3,
//         linkUrl: 'atv'
//       },
//       {
//         title: 'bike',
//         imageUrl: 'https://i.ibb.co/syszcD4/bike.jpg',
//         // size: 'large',
//         id: 4,
//         linkUrl: 'bike'
//       },
//       {
//         title: 'others',
//         imageUrl: 'https://i.ibb.co/Q6ZgPzH/others2.jpg',
//         // size: 'large',
//         id: 5,
//         linkUrl: 'others'
//       },
//     ]
//   };