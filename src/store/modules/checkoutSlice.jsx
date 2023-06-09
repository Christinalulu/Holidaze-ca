import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
   name: 'checkout',
   initialState: {
      productsInCheckout: [],
      numberInCheckout: 0,
      totalPrice: 0

   },
   reducers: {
      ADD_PRODUCT_TO_CHECKOUT: (state, action) => {
         console.log(action);
         console.log(state);
         const isProductInCheckout = state.productsInCheckout.some(
            (product) => product.id === action.payload.id
         )
         if(isProductInCheckout ){
         }else{
            state.productsInCheckout = [...state.productsInCheckout, action.payload]
            state.numberInCheckout = state.productsInCheckout.length;
            state.totalPrice = state.productsInCheckout.length
         }
        
      }

   }

})
export default checkoutSlice.reducer

const {ADD_PRODUCT_TO_CHECKOUT} = checkoutSlice.actions;
export const addSingleProductToCheckout = (productData) => (dispatch) => {
   dispatch(ADD_PRODUCT_TO_CHECKOUT(productData))
}

