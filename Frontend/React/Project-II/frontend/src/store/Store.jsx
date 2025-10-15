import {configureStore} from '@reduxjs/toolkit';
import Slice from "./userSlice";


export const store = configureStore({
    reducer: {
        user : Slice,
    },
})