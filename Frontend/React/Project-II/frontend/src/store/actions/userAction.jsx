import axios from '../../api/Axiosconfig';
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
        localStorage.setItem("user", JSON.stringify(data[0]));
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncgetuser =(user)=> async (dispatch, getState) =>{
    try {
        await axios.post("/users", user);
    } catch (error) {
        console.log(error);
    }
};

export const asyncUpdateUserProfile = (id, userData) => async (dispatch, getState) => {
    try {
        const {data} = await axios.patch(`/users/${id}`, userData);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncDeleteUserProfile = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/users/${id}`);
        dispatch(asyncLogOutUser());
    } catch (error) {
        console.log(error);
    }
};