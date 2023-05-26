import { createSlice } from "@reduxjs/toolkit";

// VenueSlice Geting all the Products in the API call
const venueSlice = createSlice({
  name: "venueSlice",
  initialState: {
    products: [],
    
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
      
    },
  },
});

export default venueSlice.reducer;

const { SET_PRODUCTS } = venueSlice.actions;

//Action Api Calls
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://nf-api.onrender.com/api/v1/holidaze/venues"
    );
    const data = await response.json();
    console.log(data);
    dispatch(SET_PRODUCTS(data));
  } catch (e) {
    console.log(e);
  }
};
