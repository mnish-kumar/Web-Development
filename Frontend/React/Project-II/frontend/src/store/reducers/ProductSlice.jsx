import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        loadProduct:(state, action) =>{
            state.products = action.payload;
        }
    }
})

export const {loadProduct} = productSlice.actions;
export default productSlice.reducer;