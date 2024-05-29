// store.js
import { createStore } from 'redux';
import cartReducer from './components/redux/cartReducer';

const store = createStore(cartReducer);

export default store;
