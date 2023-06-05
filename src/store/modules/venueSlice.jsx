import { createSlice } from "@reduxjs/toolkit";

const venueSlice = createSlice({
	name: "venueSlice",
	initialState: {
		product: [],
		singleProduct: null
	},
	reducers: {
		SET_VENUES: (state, action) => {
			state.product = action.payload;
		},
		SET_SINGLE_PRODUCT:(state,action) => {
			state.singleProduct = action.payload;
		}
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

// https://nf-api.onrender.com/api/v1/holidaze/venues/${id}

const {SET_SINGLE_PRODUCT} = venueSlice.actions;
export const fetchSingleProductById = (id) => async (dispatch) =>{

	try{
		const respone = await 
		fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`);
		const productData = await respone.json();
		dispatch(SET_SINGLE_PRODUCT(productData))
		console.log({respone});

	}catch(e){
		console.log(e);
	}
}




