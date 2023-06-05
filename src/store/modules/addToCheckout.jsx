import { createSlice } from "@reduxjs/toolkit"


const addToCheckout = createSlice({
name: 'checkout',
initialState: {
   productInCheckout: []
},
ADD_TO_CHECKOUT: (state, action) => {
   const isProductInCheckout = state.productInCheckout.some(
      (product) => product.id ===action.payload.id
   );
   if(isProductInCheckout) {

   }else{
      state.productInCheckout = [...state.productInCheckout, action.payload];
      
   }


}

})
export default addToCheckout.reducer;

const {ADD_TO_CHECKOUT} = addToCheckout.actions;
export const addSingelProductToCheckout = (data) => (dispatch) =>{
   dispatch(ADD_TO_CHECKOUT(data));
}