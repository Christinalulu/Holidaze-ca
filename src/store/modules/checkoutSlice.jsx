import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
   name: 'checkout',
   initialState: {
      productsInCheckout: [],
      numberOfProduct: 0,
   },
   reducers: {
      ADD_PRODUCT_TO_CHECKOUT: (state, action) => {
         console.log(action);
         console.log(state);
         const isProductInCheckout = state.productsInCheckout.some(
            (product) => product.id === action.payload.id
         )
         if(isProductInCheckout){
         }else{
            state.productsInCheckout = [...state.productsInCheckout, action.payload];
         }
      }
   }
})
export default checkoutSlice.reducer;

const {ADD_PRODUCT_TO_CHECKOUT} = checkoutSlice.actions;
export const addSingleProductToCheckout = (checkoutData) => (dispatch) =>{
   dispatch(ADD_PRODUCT_TO_CHECKOUT(checkoutData));
}