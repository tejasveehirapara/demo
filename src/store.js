import rootred from "./redux/reducers/main";
import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from 'redux';
        

const store = createStore(
    rootred ,applyMiddleware(thunk)
);


export default store;