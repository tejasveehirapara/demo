import {combineReducers} from "redux";
import { cartreducer } from "./reducer";


const rootred = combineReducers({
  productReducer  :cartreducer
});


export default rootred