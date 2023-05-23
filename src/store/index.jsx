import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import venueSlice from "./modules/venueSlice";


const reducer = combineReducers({
   // I will list my modules
   venueSlice

});

const index = configureStore ({
   // my store
   reducer,

});

export default index;