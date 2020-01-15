import { createStore, applyMiddleware/*, compose*/ } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'
// import logger from 'redux-logger';
// import reduxThunk from 'redux-thunk';

let middleware = [];
// let middleware = [logger];

const store = createStore( rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;