import axios from '../../api/AxiosConfig';
import { loaduser, removeUser } from '../reducers/UserSlice';


export const asyncCurrentUser = (user) => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) dispatch(loaduser(user));
        else console.log("User not logged in");
        
    } catch (error) {
        console.log(error);
    }
};


export const asyncLogOutUser = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeUser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log(data[0]);
        localStorage.setItem("user", JSON.stringify(data[0]));
    } catch (error) {
        console.log(error);
    }
};


export const asyncgetuser =(user)=> async (dispatch, getState) =>{
    try {
        const responce = await axios.post("/users", user);
    } catch (error) {
        console.log(error);
    }
};