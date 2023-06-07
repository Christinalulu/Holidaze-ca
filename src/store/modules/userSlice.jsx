import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "profile",
	initialState: {
		user: [],
	},
	reducers: {
		SET_PROFILE_SLICE: (state, action) => {
			state.user = action.payload;
		},
	},
});

export default userSlice.reducer;

const { SET_PROFILE_SLICE } = userSlice.actions;

export const fetchUser = () => async (dispatch) => {
	try {
		const response = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/profiles/${name}`
		);
		const data = response.json();
		dispatch(SET_PROFILE_SLICE(data));
	} catch(e) {
      console.log(e);
   }
};
