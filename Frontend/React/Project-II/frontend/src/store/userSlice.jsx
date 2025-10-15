/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data :[],
} 

const UserSlice = createSlice({
    name :"users",
    initialState,
    reducers:{
        loadUser: (state, action) => {
            console.log(action);
            
        },
    },
});

export const {loadUser} = UserSlice.actions

export default UserSlice.reducer;