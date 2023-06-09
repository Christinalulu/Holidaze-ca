import { createSlice } from "@reduxjs/toolkit";
import { setLoader} from "./loaderSlice"

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
	dispatch(setLoader(true))
	try {
		const response = await fetch(
			"https://api.noroff.dev/api/v1/holidaze/venues"
		);
		const data = await response.json();
		dispatch(SET_PRODUCT_SLICE(data));
		dispatch(setLoader(false))
	} catch (error) {
		dispatch(setLoader(false))
		console.log(error);
	}
};

const { SET_SINGLE_PRODUCT } = theVenueSlice.actions;
export const fetchSingleProductById = (id) => async (dispatch) => {
	dispatch(setLoader(true))
	try {
		const respone = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/venues/${id}`
		);
		const productData = await respone.json();
		dispatch(SET_SINGLE_PRODUCT(productData));
		dispatch(setLoader(false))
	} catch (e) {
		console.log(e);
		dispatch(setLoader(false))
	}
};
