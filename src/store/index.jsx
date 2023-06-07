import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import theVenueSlice from "./modules/theVenueSlice";
import userSlice from "./modules/userSlice";
import checkoutSlice from './modules/checkoutSlice';


const reducer = combineReducers({
   theVenueSlice,
   userSlice,
   checkoutSlice

 

});

const index = configureStore ({
   reducer,
});

export default index;