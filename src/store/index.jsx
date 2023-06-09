import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import theVenueSlice from "./modules/theVenueSlice";
import checkoutSlice from "./modules/checkoutSlice";
import loaderSlice from "./modules/loaderSlice";


const reducer = combineReducers({
   theVenueSlice,
   loader: loaderSlice,
   checkout: checkoutSlice,
 

});

const index = configureStore ({
   reducer,
});

export default index;