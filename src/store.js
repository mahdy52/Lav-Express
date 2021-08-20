import { createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reduce/user";

const Reducers = combineReducers({

  reducerStore :userReducer 

 })

const store =   createStore(Reducers,applyMiddleware(thunk));
  export default store