// Calling the data or API

import axios from "../api/axiosconfig";
import { loadUser } from "./userSlice";

// Contract:
// - input: none
// - output: array of products (response.data) or throws an error
// - error modes: network / server errors are thrown to caller
export const asyncGetProducts = async () => {
    try {
        const response = await axios.get("/products");
        loadUser(response.data);
        
    } catch (error) {
        console.error("asyncGetProducts error:", error);
        throw error;
    }
};