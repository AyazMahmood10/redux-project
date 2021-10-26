//this file will contain all the reducers and all will be merged to make a single a root reducer because there can be only one store in redux and this root  rreducer will be passed to the store,

import { combineReducers } from "redux";
import cartItems from "./reducers";


export default combineReducers({ //This is the root reducer where we combine all of the functions present in the reducers.js file. combineReducers is used to combine all the reducer
    cartItems   //if there were more than 1 reducer, we would write as : { carItems, users, friends etc..}
})

