import { createSlice } from "@reduxjs/toolkit";

const venueSlice = createSlice({
	name: "venueSlice",
	initialState: {
		product: [],
	},
	reducers: {
		SET_VENUES: (state, action) => {
			state.product = action.payload;
		},
	},
});




export default venueSlice.reducer;

const { SET_VENUES } = venueSlice.actions;


export const fetchProducts = () => async (dispatch) => {
	try {
		const response = await 
		fetch("https://nf-api.onrender.com/api/v1/holidaze/venues");
		const data = await response.json();
		dispatch(SET_VENUES(data));
		
	} catch (e) {
		console.log(e);
	}
};







