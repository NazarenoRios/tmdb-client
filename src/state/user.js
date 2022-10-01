import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    credentials:'include',
    baseURL: 'https://butterflix.onrender.com'
 })

export const sendRegisterRequest = createAsyncThunk("register", ({email, password, name, lastname}) => {
    return instance.post("/api/users/register", {
        email: email.value,
        password: password.value,
        name: name.value,
        lastname: lastname.value,
      }, { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const sendLoginRequest = createAsyncThunk("login", ({email, password}) => {
    return instance.post("/api/users/login", {
        email: email.value,
        password: password.value,
      }, { withCredentials: true, credentials: 'include' })
      .then(() => {
        return instance.get("/api/users/me", { withCredentials: true, credentials: 'include' })
            .then(res => res.data)
      })
})

export const checkLogin = createAsyncThunk("check", () => {
    return instance.get("/api/users/me", { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const logOut = createAsyncThunk("LOG_OUT", () => {
    return instance.post("/api/users/logout", { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const updateProfile = createAsyncThunk("UPDATE_PROFILE", ({name,lastname}) => {
    return instance.put("/api/users/profile", {
        name: name.value,
        lastname: lastname.value,
    }, { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const updateProfileName = createAsyncThunk("UPDATE_PROFILE", (lastname) => {
    return instance.put("/api/users/profile", {
        lastname: lastname.value,
    }, { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const updateProfileLastname = createAsyncThunk("UPDATE_PROFILE", (name) => {
    return instance.put("/api/users/profile", {
        name: name.value,
    }, { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const updateProfilePicture = createAsyncThunk("UPDATE_PROFILE_PICTURE", (pic) => {
    return instance.put("/api/users/profile", {
        pic: pic
    }, { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const changePassword = createAsyncThunk("CHANGE_PASSWORD", ({password}) => {
    return instance.put("/api/users/changePassword", {
        password: password.value,
    }, { withCredentials: true, credentials: 'include' })
      .then(res => res.data)
})

export const getAllUsers = createAsyncThunk("GET_USERS", (setUsers) => {
    return instance.get("/api/users/")
      .then(res => setUsers(res.data))
}, { withCredentials: true, credentials: 'include' })


const usersReducer = createReducer(
    {},
    {
        [sendRegisterRequest.fulfilled]: (state,action) => action.payload,
        [sendLoginRequest.fulfilled]: (state,action) => action.payload,
        [checkLogin.fulfilled]: (state,action) => action.payload,
        [logOut.fulfilled]: (state,action) => action.payload,
        [updateProfile.fulfilled]: (state,action) => action.payload,
        [updateProfileName.fulfilled]: (state,action) => action.payload,
        [updateProfileLastname.fulfilled]: (state,action) => action.payload,
        [updateProfilePicture.fulfilled]: (state,action) => action.payload,
        [changePassword.fulfilled]: (state,action) => action.payload,
        [getAllUsers.fulfilled]: (state,action) => action.payload,
    }
)

export default usersReducer;
