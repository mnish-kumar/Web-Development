import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    // yaha recive hua data loaduser se
    users: null,
};

const userSlice = createSlice ({
    name:"user",
    initialState,
    reducers:{
        // UI ka data lata hai API ke through aur ye initialState me bhej deta hai
        loaduser: (state, action)=>{
           state.users = action.payload;
        },
    }
})

export const {loaduser} =userSlice.actions;
export  default  userSlice.reducer;