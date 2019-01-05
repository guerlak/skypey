import { createStore } from "redux";
import state from '../reducers/indexReducer'

const store = createStore(state); 

export default store;