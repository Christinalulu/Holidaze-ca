import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import venueSlice from "./modules/venueSlice";
import addToCheckout from "./modules/addToCheckout";


const reducer = combineReducers({
// here i will defind my slices
venueSlice,
addToCheckout
});

const index = configureStore ({
   reducer,
});

export default index;