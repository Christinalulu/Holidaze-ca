import { createSlice } from "@reduxjs/toolkit";

const theVenueSlice = createSlice({
	name: "theVenueSlice",
	initialState: {
		product: [],
		singleProduct: null,
	},
	reducers: {
		SET_PRODUCT_SLICE: (state, action) => {
			state.product = action.payload;
		},
		SET_SINGLE_PRODUCT: (state, action) => {
			state.singleProduct = action.payload;
		},
	},
});

export default theVenueSlice.reducer;

const { SET_PRODUCT_SLICE } = theVenueSlice.actions;

export const fetchProducts = () => async (dispatch) => {
	
	try {
		const response = await fetch(
			"https://api.noroff.dev/api/v1/holidaze/venues"
		);
		const data = await response.json();
		dispatch(SET_PRODUCT_SLICE(data));
		
	} catch (error) {
	
		console.log(error);
	}
};

const { SET_SINGLE_PRODUCT } = theVenueSlice.actions;
export const fetchSingleProductById = (id) => async (dispatch) => {
	try {
		const respone = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/venues/${id}`
		);
		const productData = await respone.json();
		dispatch(SET_SINGLE_PRODUCT(productData));
	} catch (e) {
		console.log(e);
	}
};
