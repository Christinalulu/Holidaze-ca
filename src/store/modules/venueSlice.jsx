import { createSlice } from "@reduxjs/toolkit";
import { VENUES_URL, } from "../../api/api";


const venueSlice = createSlice({
  name: "venueSlice",
  initialState: {
    venues: [],
    venueDetail: null
    
  },
  reducers: {
    SET_VENUES: (state, action) => {
      state.venues = action.payload;
    },
    SET_SINGEL_VENUE: (state, action) => {
      state.venueDetail = action.payload;
    }
  },
});

export default venueSlice.reducer;

const { SET_VENUES } = venueSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch(
     VENUES_URL
    );
    const data = await response.json();
    dispatch(SET_VENUES(data));
  } catch (e) {
    return (e);
  }
};

// const {SET_SINGEL_VENUE} = venueSlice.actions;

// const VENUE_BY_ID_URL = `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`
// console.log(VENUE_BY_ID_URL);
// export const fetchSingelVenueById = (id) => async (dispatch) =>{
  
//   try{
//     const response = await fetch(VENUE_BY_ID_URL) ;
  
//     const venueDetail = await response.json();
//     dispatch(SET_SINGEL_VENUE(venueDetail))
//   }catch{
//     return (e);
//   }
// }



