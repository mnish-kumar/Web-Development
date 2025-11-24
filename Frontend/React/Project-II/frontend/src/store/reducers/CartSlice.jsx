import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        loadCart: (state, action) =>{
            state.carts = action.payload;
        },
        addToCart: (state, action) => {
            state.carts.push(action.payload);
        }
    }
})

export const {loadCart, addToCart} = cartSlice.actions;
export default cartSlice.reducer;