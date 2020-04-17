import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => store.getState())
export default store;
